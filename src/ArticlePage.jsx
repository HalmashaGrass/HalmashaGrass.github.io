import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react'
import axios from 'axios';

export default function ArticlePageNew() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [content, setContent] = useState('');
    useEffect(() => {
        axios.get('/data/articles.json')
          .then(response => {
            const articleData = response.data.find(article => article.id === parseInt(id));
            if (articleData) {
              setArticle(articleData);
    
              axios.get(`/content/${articleData.contentName}`)
                .then(response => {
                  setContent(response.data);
                })
                .catch(error => {
                  console.error("Error fetching article content:", error);
                });
            } else {
              console.error("Article not found");
            }
          })
          .catch(error => {
            console.error("Error fetching articles data:", error);
          });
      }, [id]);
      if (!article) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="text-center">
            <div className="loading-spinner"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      );
      const imageUrl = `/images/${article.imageName}`;


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
              alt={article.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h1 className="absolute bottom-4 left-6 right-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                
                <div>
                  <p className="font-semibold text-gray-800">{article.author}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">

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
  )
}