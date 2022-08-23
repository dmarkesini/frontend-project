import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import codingImage from "../images/coding.jpg";

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
          {article.article.topic === "coding" ? (
            <img className="topic-image" src={codingImage} />
          ) : article.article.topic === "cooking" ? (
            <img className="topic-image" src={codingImage} />
          ) : (
            <img className="topic-image" src={codingImage} />
          )}
          <h1 id="single-page_title">
            {article.article.title}{" "}
            <h6 id="single-page_topic"> #in {article.article.topic}</h6>
          </h1>
          <div className="articles-container_author-posted">
            <p id="single-page_author">Author: {article.article.author}</p>
            <p id="single-page_posted">
              Posted at: {article.article.created_at}
            </p>
          </div>
          <p id="single-page_body">{article.article.body}</p>
          <div className="articles-container_votes-comments">
            <p id="single-page_votes">Votes: {article.article.votes}</p>
            <p id="single-page_comment">
              Comments: {article.article.comment_count}
            </p>
          </div>
          </div>
      )}
    </>
  );
};

export default SingleArticlePage;
