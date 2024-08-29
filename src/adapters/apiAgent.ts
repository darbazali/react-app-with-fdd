import axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "@constants/envVariables";
const TOKEN = "token_from_state";

export const apiAgent: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});
