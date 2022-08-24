import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticlePage from "./components/SingleArticlePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics />
        <Routes>
          <Route path="/articles/:article_id" element={<SingleArticlePage />} />
          <Route path="/articles" element={<ArticlesByTopic />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
