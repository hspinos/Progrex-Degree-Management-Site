
import axios from "axios";

export const http =  axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});

export const admin = axios.create({
  baseURL: "http://localhost:3000/admin",
  headers: {
    "Content-type": "application/json"
  }
});