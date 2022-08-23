import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import codingImage from "../images/coding.png";
import cookingImage from "../images/cooking.png";
import footballImage from "../images/football.png";
import Votes from "./Votes";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    fetchArticleById(article_id).then(({ data }) => {
      setArticle(data);
    });
  }, [article]);

  return (
    <>
      {article && (
        <div className="articles_single-page-article-container">
          <h1 id="single-page_title">{article.article.title}</h1>
          <div className="articles-container_author-posted-topic">
            <p id="single-page_posted">
              Posted at: {article.article.created_at.slice(0, 10)} by{" "}
              {article.article.author} in
            </p>
            <Link
              to={`/articles?topic=${article.article.topic}`}
              id="single-page_topic"
            >
              {" "}
              #{article.article.topic}
            </Link>
          </div>
          {article.article.topic === "coding" ? (
            <img
              className="topic-image-single-page"
              src={codingImage}
              alt="coding"
            />
          ) : article.article.topic === "cooking" ? (
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

          <p id="single-page_body">{article.article.body}</p>

          <Votes article={article} />
          <p id="single-page_comment">
            Comments: {article.article.comment_count}
          </p>
        </div>
      )}
    </>
  );
};

export default SingleArticlePage;
