import axios from "axios";

export const fetchArticles = (sortByQuery, orderQuery = "DESC") => {
  let endpoint = `https://social-interactive-project.herokuapp.com/api/articles`;

  if (sortByQuery) {
    endpoint += `?sort_by=${sortByQuery}&order=${orderQuery}`;
  } else {
    endpoint += `?order=${orderQuery}`;
  }

  return axios.get(endpoint).then((body) => body);
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

export const fetchArticlesByTopic = (topic, sortByQuery, orderQuery = "DESC") => {
  let endpoint = `https://social-interactive-project.herokuapp.com/api/articles?topic=${topic}`;

  if (sortByQuery) {
    endpoint += `&sort_by=${sortByQuery}&order=${orderQuery}`;
  }

  return axios.get(endpoint).then((body) => body);
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://social-interactive-project.herokuapp.com/api/articles/${article_id}`)
    .then((body) => body);
};

export const fetchCommentsById = (article_id) => {
  return axios
    .get(`https://social-interactive-project.herokuapp.com/api/articles/${article_id}/comments`)
    .then((body) => body);
};

export const patchArticleById = (article_id, vote) => {
  return axios
    .patch(`https://social-interactive-project.herokuapp.com/api/articles/${article_id}`,{ inc_votes: vote });
};


export const postCommentById = (article_id, comment) => {
  return axios
    .post(
    `https://social-interactive-project.herokuapp.com/api/articles/${article_id}/comments`, comment)

}

export const deleteCommentById = (comment_id) => {
  return axios
    .delete(
    `https://social-interactive-project.herokuapp.com/api/comments/${comment_id}`);
}
