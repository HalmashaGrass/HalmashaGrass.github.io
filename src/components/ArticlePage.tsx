import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { getDocument } from '@/services/firestore';

// Define a type for the article data
interface Article {
  name: string;
  author: string;
  content: string;
  image: string;
}

export default function ArticlePageNew() {
  const { id } = useParams<{ id: string }>(); // Explicitly type the params to include id as a string
  const [article, setArticle] = useState<Article | null>(null); // State to hold the article data
  const [content, setContent] = useState(''); // State for content

  useEffect(() => {
    // Fetch the article data asynchronously
    const fetchArticle = async () => {
      if (id) { // Check if id is defined
        const fetchedArticle = await getDocument('articles', id);
        if (fetchedArticle) { // Ensure fetchedArticle is not null
          setArticle(fetchedArticle as Article); // Cast to Article type
          setContent(fetchedArticle.content); // Set the content from the fetched article
        }
      }
    };

    fetchArticle();
  }, [id]); // Fetch article whenever `id` changes

  if (!article) {
    return <div>Loading...</div>; // Display loading message while article is being fetched
  }

  const imageUrl = `/images/${article.image}`; // Create the image URL based on the article data

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center mb-6 text-orange-600 hover:text-orange-700 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="text-lg font-semibold">חזרה לעמוד הבית</span>
        </Link>
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative">
            <img
              src={imageUrl}
              alt={article.name}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h1 className="absolute bottom-4 left-6 right-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              {article.name}
            </h1>
          </div>
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold text-gray-800">{article.author}</p>
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {content.split("\n").map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < content.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
