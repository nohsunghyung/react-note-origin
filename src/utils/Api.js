import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

export const userLogin = (apiParams) => {
  return instance.post("login", apiParams);
};
