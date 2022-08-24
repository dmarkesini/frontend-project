import { useState } from "react";
import { postCommentById } from "../api";
import Loading from "./Loading";

const PostComment = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [posted, setPosted] = useState(false);

  const handlePostRequest = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postCommentById(article_id, {
      username: "weegembump",
      body: commentInput,
    }).then(() => {
      setCommentInput("");
      setIsLoading(false);
      setPosted(true);
    });
  };

  return (
    <div>
      {isLoading && <Loading />}
      {posted && <p className="comments_posted-message">Comment posted!</p>}
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
