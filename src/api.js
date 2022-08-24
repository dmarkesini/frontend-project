import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://social-interactive-project.herokuapp.com/api/articles")
    .then((body) => body);
};

export const fetchUsers = () => {
  return axios
    .get("https://social-interactive-project.herokuapp.com/api/users")
    .then((body) => body);
};

export const fetchTopics = () => {
  return axios
    .get("https://social-interactive-project.herokuapp.com/api/topics")
    .then((body) => body);
};

export const fetchArticlesByTopic = (topic) => {
  return axios.get(
    `https://social-interactive-project.herokuapp.com/api/articles?topic=${topic}`
  );
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://social-interactive-project.herokuapp.com/api/articles/${article_id}`)
    .then((body) => body);
};

export const patchArticleById = (article_id, vote) => {
  return axios
    .patch(
      `https://social-interactive-project.herokuapp.com/api/articles/${article_id}`, {inc_votes: vote})
}