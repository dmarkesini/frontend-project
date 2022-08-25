import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import codingImage from "../images/coding.png";
import cookingImage from "../images/cooking.png";
import footballImage from "../images/football.png";
import Votes from "./Votes";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchArticleById(article_id)
      .then(({ data }) => {
        const { article } = data;
        setArticle(article);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      });
  }, [article]);

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          {article && (
            <div>
              <div className="articles_single-page-article-container">
                <h1 id="single-page_title">{article.title}</h1>
                <div className="articles-container_author-posted-topic">
                  <p id="single-page_posted">
                    Posted at: {article.created_at.slice(0, 10)} by{" "}
                    {article.author} in
                  </p>
                  <Link
                    to={`/articles?topic=${article.topic}`}
                    id="single-page_topic"
                  >
                    {" "}
                    #{article.topic}
                  </Link>
                </div>
                {article.topic === "coding" ? (
                  <img
                    className="topic-image-single-page"
                    src={codingImage}
                    alt="coding"
                  />
                ) : article.topic === "cooking" ? (
                  <img
                    className="topic-image-single-page"
                    src={cookingImage}
                    alt="cooking"
                  />
                ) : (
                  <img
                    className="topic-image-single-page"
                    src={footballImage}
                    alt="football"
                  />
                )}

                <p id="single-page_body">{article.body}</p>

                <Votes article={article} />
              </div>

              <div className="articles_single-page-comments-section">
                <p id="single-page_comment">{article.comment_count} Comments</p>
                <Comments article_id={article.article_id} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SingleArticlePage;
