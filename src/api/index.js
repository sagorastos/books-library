import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const ENDPOINTS = {
  stats: "stats",
  books: "books",
};

export const fetchStats = () =>
  axios.get(`${API_BASE_URL}/${ENDPOINTS.stats}`).then(({ data }) => data);

export const fetchBooks = () =>
  axios.get(`${API_BASE_URL}/${ENDPOINTS.books}`).then(({ data }) => data);

// export const fetchBooks = (id) =>
//   axios
//     .get(`${API_BASE_URL}/${ENDPOINTS.books}/${id}`)
//     .then(({ data }) => data);


export const addBook = (data) =>
  axios.post(`${API_BASE_URL}/${ENDPOINTS.books}`, data);

  export const deleteBook = (id) =>
  axios.delete(`${API_BASE_URL}/${ENDPOINTS.books}/${id}`);