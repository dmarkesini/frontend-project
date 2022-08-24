import { useState } from "react";

const PostComment = ({ setComments }) => {
  const [commentInput, setCommentInput] = useState("");

  const handlePostRequest = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.PreventDefault();

    setComments((currComments) => {
      return [...currComments, { comment: commentInput }];
    });
    setCommentInput("");
  };

  return (
    <div>
      <p>What are your thoughts?</p>
      <form onSubmit={handleSubmit}>
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
