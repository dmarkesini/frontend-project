import { useState } from "react";
import { deleteCommentById } from "../api";
import Loading from "./Loading";

const DeleteComment = ({ comment_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posted, setPosted] = useState(false);

  const deleteComment = (id) => {
    setIsLoading(true);
    setPosted(true);
    deleteCommentById(id);
  };

  return (
    <div className="comments_delete-comment-container">
      {isLoading && <Loading />}
      {posted && <p className="comments_deleted-message">Comment deleted!</p>}
      <button
        className="comments_delete-comment"
        onClick={() => deleteComment(comment_id)}
      >
        Delete
      </button>
    </div>
  );
};
export default DeleteComment;
