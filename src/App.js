import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  const [currentArticle, setCurrentArticle] = useState({});
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics />
        <Routes>
          <Route path="/articles" element={<ArticlesByTopic />} />
          <Route
            path="/"
            element={
              <Articles
                currentArticle={currentArticle}
                setCurrentArticle={setCurrentArticle}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
