import { getAllDocuments } from "@/services/firestore";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

// Define a type for news item (assuming it’s similar to NewsItem)
interface NewsItem {
  id: string;
  image: string;
  name: string;
  content: string;
  author: string;
}

export default function ArticlesSection() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch data from the service

        const data = await getAllDocuments('articles');
        setArticles(data as NewsItem[]);
      } catch (err) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);
  
  if (loading) return (
    <div className="loader"></div>
  )
;
  if (error) return <p>Error: {error}</p>;
  console.log("reverse")
  console.log(articles.toReversed())
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">המאמרים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.toReversed().map((article) => (
            <div key={article.id}>
              <ArticleCard
                myId={article.id}
                title={article.name} // Changed from 'name' to 'title'
                imageUrl={article.image} // Changed to match the property
                author={article.author}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
