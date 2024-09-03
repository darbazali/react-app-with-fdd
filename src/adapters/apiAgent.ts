import axios, { AxiosInstance } from "axios"
import { API_BASE_URL } from "@constants/envVariables"

const apiAgent: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

apiAgent.interceptors.request.use((config) => {
  config.headers.Accept = "application/json"
  config.headers["Content-Type"] = "application/json; charset=UTF-8"
  return config
})

export default apiAgent
