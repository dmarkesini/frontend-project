import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import ArticleDisplay from "./ArticleDisplay";
import TopicTitle from "./TopicTitle";

const ArticlesByTopic = ({ sortByQuery, orderQuery }) => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchArticlesByTopic(
      searchParams.get("topic"),
      sortByQuery,
      orderQuery
    ).then(({ data }) => {
      setArticlesByTopic(data);
    });
  }, [articlesByTopic, searchParams]);

  return (
    <>
      <TopicTitle title={`${searchParams.get("topic")} articles`} />
      <div className="articles_article-display">
        {articlesByTopic.map((article) => {
          return <ArticleDisplay article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
};

export default ArticlesByTopic;
