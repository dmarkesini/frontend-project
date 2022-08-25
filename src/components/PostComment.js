import { useState } from "react";
import { postCommentById } from "../api";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const PostComment = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [posted, setPosted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePostChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postCommentById(article_id, {
      username: "weegembump",
      body: commentInput,
    })
      .then(() => {
        setCommentInput("");
        setIsLoading(false);
        setPosted(true);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
      });
  };

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <div className="comments_post-comment-container">
          {isLoading && <Loading />}
          {posted && <p className="comments_posted-message">Comment posted!</p>}
          <p>What are your thoughts?</p>
          <form onSubmit={(event) => handleSubmit(event)}>
            <textarea
              onChange={handlePostChange}
              id="comment-input"
              value={commentInput}
              required
            />
            <div id="comments_button-container">
              <button className="comments_submit-button" type="submit">
                {" "}
                Post Comment
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default PostComment;
