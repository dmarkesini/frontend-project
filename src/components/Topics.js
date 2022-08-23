import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="topics-container">
      <Link to={`/`}>
        <h4 className="topic-1">Home</h4>
      </Link>
      <Link to={`/articles?topic=coding`}>
        <h4 className="topic-2">Coding</h4>
      </Link>
      <Link to={`/articles?topic=cooking`}>
        <h4 className="topic-3">Cooking</h4>
      </Link>
      <Link to={`/articles?topic=football`}>
        <h4 className="topic-4">Football</h4>
      </Link>
    </div>
  );
};

export default Topics;
