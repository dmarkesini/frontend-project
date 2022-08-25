import { fetchCommentsById } from "../api";
import { useState, useEffect } from "react";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsById(article_id).then(({ data }) => {
      setComments(data);
    });
  }, [comments, article_id]);

  return (
    <div>
      <PostComment article_id={article_id} />
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p id="comments_author-posted">
              {comment.author} at {comment.created_at.slice(0, 10)}
            </p>
            <p id="comments_body">{comment.body}</p>
            {comment.author === "weegembump" && <DeleteComment comment_id={ comment.comment_id} />}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
