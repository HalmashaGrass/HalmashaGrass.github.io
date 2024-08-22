// src/ArticlePage.jsx
import React from 'react';

const ArticlePage = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;