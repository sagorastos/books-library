import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const ENDPOINTS = {
  stats: "stats",
  courses: "courses",
  instructors: "instructors",
};

export const fetchStats = () =>
  axios.get(`${API_BASE_URL}/${ENDPOINTS.stats}`).then(({ data }) => data);