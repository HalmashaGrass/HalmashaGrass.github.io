import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getAllDocuments } from '@/services/firestore';

// Define a type for news item
interface NewsItem {
  id: string;
  image: string;
  title: string;
  tag: string;
  content: string;
  date: string;
}

// Fetch news data and ensure it's typed correctly
export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch data from the service
        const data = await getAllDocuments('news');
        setNews(data as NewsItem[]);
      } catch (err) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-orange-100 bg-fixed">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 mb-12 text-center">
          🌟 חדשות! 🌟
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item: NewsItem) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Define the props type for NewsCard
interface NewsCardProps {
  item: NewsItem;
}

function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className="card-body">
          <div className="flex items-start space-x-4">
            <img src={`/images/${item.image}`} alt="" className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-1">
              <h2 className="card-title text-green-700 text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
              <div className="badge badge-accent text-white font-semibold mb-2">{item.tag}</div>
            </div>
          </div>
          <p className="text-gray-600 mt-4 mb-4">{item.content}</p>
          <div className="text-right text-sm text-orange-500">{item.date}</div>
        </div>
      </div>
    </motion.div>
  );
}
