import axios from "axios";

export const api = axios.create({
  baseURL: "https://type.fit/api",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});
