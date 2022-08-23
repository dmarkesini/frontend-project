import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";

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
          <p id="single-page_topic">Topic: {article.article.topic}</p>
          <p id="single-page_author">Author: {article.article.author}</p>
          <p id="single-page_body">{article.article.body}</p>
          <p id="single-page_created">Posted at: {article.article.created_at}</p>
          <p id="single-page_votes">Votes: {article.article.votes}</p>
          <p id="single-page_comment">Comments: {article.article.comment_count}</p>
        </div>
      )}
    </>
  );
};

export default SingleArticlePage;
