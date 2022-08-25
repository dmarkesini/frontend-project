import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleDisplay from "./ArticleDisplay";
import TopicTitle from "./TopicTitle";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

const Articles = ({ sortByQuery, orderQuery }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(sortByQuery, orderQuery)
      .then(({ data }) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  }, [articles]);

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <TopicTitle title={"Read all the best articles"} />
              <div className="articles_article-display">
                {articles.map((article) => {
                  return (
                    <ArticleDisplay
                      article={article}
                      key={article.article_id}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Articles;
