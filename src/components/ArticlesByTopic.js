import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import ArticleDisplay from "./ArticleDisplay";

const ArticlesByTopic = () => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchArticlesByTopic(searchParams.get("topic")).then(({ data }) => {
      setArticlesByTopic(data);
    });
  }, [articlesByTopic]);

  return (
    <>
      <div className="articles_article-display">
        {articlesByTopic.map((article) => {
          return <ArticleDisplay article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
};

export default ArticlesByTopic;
