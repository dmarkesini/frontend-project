const ArticleDisplay = ({ article }) => {
//   console.log(article.title);
  return (
    <div className="articles_single-article">
      <p className="articles_single-title">{article.title}</p>
      <p className="articles_single-author">Author: {article.author}</p>
      <p className="articles_single-votes">Votes: {article.votes}</p>
      <p className="articles_single-comments">Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleDisplay;
