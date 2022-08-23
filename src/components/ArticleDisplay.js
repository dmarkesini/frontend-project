import { useNavigate } from "react-router-dom";
import codingImage from "../images/coding.jpg"

const ArticleDisplay = ({ article }) => {
  const navigate = useNavigate();
  const navigateToArticleById = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div
      className="articles_single-article"
      onClick={() => navigateToArticleById(article.article_id)}
    >
      {article.topic === "coding" ? (
        <img src={codingImage} />
      ) : article.topic === "cooking" ? (
        <img src={codingImage} />
      ) : (
        <img src={codingImage} />
      )}
      <div className="articles_text-container">
        <p className="articles_single-title">{article.title}</p>
        <p className="articles_single-author">Author: {article.author}</p>
        <p className="articles_single-votes">Votes: {article.votes}</p>
        <p className="articles_single-comments">
          Comments: {article.comment_count}
        </p>
      </div>
    </div>
  );
};

export default ArticleDisplay;
