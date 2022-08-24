import { useState } from "react";
import { postCommentById } from "../api";

const PostComment = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");

  const handlePostRequest = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentById(article_id, {
      username: "weegembump",
      body: commentInput,
    }).then(() => {
      setCommentInput("");
    });
  };

  return (
    <div>
      <p>What are your thoughts?</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          onChange={handlePostRequest}
          id="comment-input"
          type="text"
          value={commentInput}
          required
        />
        <button className="comments_submit-button" type="submit">
          {" "}
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default PostComment;
