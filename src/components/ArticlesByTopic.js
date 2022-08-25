import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import ArticleDisplay from "./ArticleDisplay";
import TopicTitle from "./TopicTitle";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

const ArticlesByTopic = ({ sortByQuery, orderQuery }) => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchArticlesByTopic(searchParams.get("topic"), sortByQuery, orderQuery)
      .then(({ data }) => {
        setArticlesByTopic(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  }, [articlesByTopic, searchParams]);

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
              <TopicTitle title={`${searchParams.get("topic")} articles`} />
              <div className="articles_article-display">
                {articlesByTopic.map((article) => {
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

export default ArticlesByTopic;
