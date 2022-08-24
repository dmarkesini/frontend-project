import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticlePage from "./components/SingleArticlePage";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";

function App() {
  const [sortByQuery, setSortByQuery] = useState();
  const [orderQuery, setOrderQuery] = useState();

  const handleSortBy = (eventKey) => {
    setSortByQuery(eventKey);
  };
  const handleOrder = (eventKey) => {
    setOrderQuery(eventKey);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics handleSortBy={handleSortBy} handleOrder={handleOrder} />
        <Routes>
          <Route path="/articles/:article_id" element={<SingleArticlePage />} />
          <Route
            path="/articles"
            element={
              <ArticlesByTopic
                sortByQuery={sortByQuery}
                orderQuery={orderQuery}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/"
            element={
              <Articles sortByQuery={sortByQuery} orderQuery={orderQuery} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
