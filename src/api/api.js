import axios from "axios";

const apiURLs = {
  development: "http://localhost:4000/api/1.0",
  production: "https://pink-troubled-elephant.cyclic.app/api/1.0",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

export { api };
