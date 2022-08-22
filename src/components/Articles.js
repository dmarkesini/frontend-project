import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleDisplay from "./ArticleDisplay";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(({ data }) => {
      setArticles(data);
    });
  }, [articles]);

  return (
    <>
      <div className="articles_header-container">
        <h1 className="articles_title">Popular articles</h1>

        <button className="articles_show-all-articles-button">Show all articles</button>
      </div>
      <div className="articles_article-display">
        {articles.map((article) => {
          return <ArticleDisplay article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
};

export default Articles;
