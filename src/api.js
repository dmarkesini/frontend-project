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