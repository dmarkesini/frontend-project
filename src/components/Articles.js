import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleDisplay from "./ArticleDisplay";
import TopicTitle from "./TopicTitle";
import ErrorPage from "./ErrorPage";

const Articles = ({ sortByQuery, orderQuery }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchArticles(sortByQuery, orderQuery)
      .then(({ data }) => {
        setArticles(data);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      });
  }, [articles]);

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          <TopicTitle title={"Read all the best articles"} />
          <div className="articles_article-display">
            {articles.map((article) => {
              return (
                <ArticleDisplay article={article} key={article.article_id} />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Articles;
