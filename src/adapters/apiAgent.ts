import axios, { AxiosInstance } from "axios"
import { API_BASE_URL } from "@constants/envVariables"
import { useAuthStore } from "features/auth/state/useAuthStore"

const apiAgent: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

apiAgent.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  config.headers.Authorization = `Bearer ${token}`
  config.headers.Accept = "application/json"
  config.headers["Content-Type"] = "application/json; charset=UTF-8"
  return config
})

export default apiAgent
