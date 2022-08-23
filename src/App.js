import "./App.css";
import Header from "./components/Header";
import UserInterface from "./components/UserInterface";
import Articles from "./components/Articles";
import { useState } from "react";

function App() {
  const [currentArticle, setCurrentArticle] = useState({});
  return (
    <div className="App">
      <Header />
      <Articles
        currentArticle={currentArticle}
        setCurrentArticle={setCurrentArticle}
      />
    </div>
  );
}

export default App;
