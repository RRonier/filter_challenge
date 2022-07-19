import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  responseType: "json",
});

export default instance;
