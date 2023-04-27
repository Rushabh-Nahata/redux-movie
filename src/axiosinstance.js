import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export default axiosinstance;
