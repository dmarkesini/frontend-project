import { useState } from "react";
import { patchArticleById } from "../api";

const Votes = ({ article }) => {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const vote = (voteValue) => {
    patchArticleById(article.article.article_id, voteValue);
    if (voteValue === +1) {
      setUpVote(true);
    } else {
      setDownVote(true);
    }
  };

  return (
    <>
      <div className="articles-container_votes-buttons">
        <p id="single-page_votes">Votes: {article.article.votes}</p>
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
    </>
  );
};

export default Votes;
