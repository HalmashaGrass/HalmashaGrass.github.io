import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArticlePage() {
  const { id } = useParams(); // Get article ID from the URL
  const [article, setArticle] = useState(null); // State for article data
  const [content, setContent] = useState(''); // State for article content

  useEffect(() => {
    axios.get('/halmasha/data/articles.json')
      .then(response => {
        const articleData = response.data.find(article => article.id === parseInt(id));
        if (articleData) {
          setArticle(articleData);

          // Fetch article content
          axios.get(`/halmasha/content/${articleData.contentName}`)
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

  if (!article) return <div>Loading...</div>;

  // Construct image URL with base URL
  const imageUrl = `/halmasha/images/${article.imageName}`;

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={imageUrl} alt={article.title} />
      <div className="article-content">
        {content}
      </div>
    </div>
  );
}

export default ArticlePage;
