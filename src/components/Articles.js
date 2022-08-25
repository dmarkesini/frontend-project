import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleDisplay from "./ArticleDisplay";
import TopicTitle from "./TopicTitle";

const Articles = ({ sortByQuery, orderQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(sortByQuery, orderQuery).then(({ data }) => {
      setArticles(data);
    });
  }, [articles]);

  return (
    <>
      <TopicTitle title={"Read all the best articles"} />
      <div className="articles_article-display">
        {articles.map((article) => {
          return <ArticleDisplay article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
};

export default Articles;
