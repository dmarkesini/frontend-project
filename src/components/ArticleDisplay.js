import {Link} from "react-router-dom"

const ArticleDisplay = ({ article }) => {

  return (
    <Link className="articles_single-article" to={`/articles/${article.article_id}`}>
      <p className="articles_single-title">{article.title}</p>
      <p className="articles_single-author">Author: {article.author}</p>
      <p className="articles_single-votes">Votes: {article.votes}</p>
      <p className="articles_single-comments">
        Comments: {article.comment_count}
      </p>
    </Link>
  );
};

export default ArticleDisplay;
