import { useNavigate } from "react-router-dom";
import codingImage from "../images/coding.png";
import cookingImage from "../images/cooking.png";
import footballImage from "../images/football.png";

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
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : article.topic === "cooking" ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <div className="articles_text-container">
        <p className="articles_single-title">{article.title}</p>
        <p className="articles_single-posted-author">
          posted at {article.created_at.slice(0, 10)} by {article.author}
        </p>
        <div className="articles_single-votes-comments">
          <p>
            {article.votes} Votes ● {article.comment_count} Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDisplay;
