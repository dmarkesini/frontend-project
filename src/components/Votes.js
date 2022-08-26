import { useState } from "react";
import { patchArticleById } from "../api";
import ErrorPage from "./ErrorPage";

const Votes = ({ article }) => {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const vote = (voteValue) => {
    patchArticleById(article.article_id, voteValue).catch((err) => {
      setError(true);
      setErrorMessage(err.message);
    });
    if (voteValue === +1) {
      setUpVote(true);
    } else {
      setDownVote(true);
    }
  };

  return (
    <>
      {error ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <div className="articles-container_votes-buttons">
          <p id="single-page_votes">{article.votes} Votes</p>
          <button
            disabled={upVote}
            onClick={() => vote(+1)}
            style={{
              backgroundColor: upVote && "rgb(255, 80, 10)",
            }}
            id="vote-button"
          >
            Upvote
          </button>
          <button
            disabled={downVote}
            onClick={() => vote(-1)}
            style={{
              backgroundColor: downVote && "rgb(255, 80, 10)",
            }}
            id="vote-button"
          >
            Downvote
          </button>
        </div>
      )}
    </>
  );
};

export default Votes;
