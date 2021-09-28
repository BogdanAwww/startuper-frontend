import { cookie } from './../../utils/cookie'
import axios, { AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.response.use((response) => {
  return response.data
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const user = cookie.get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)
    config.headers.authorization = user?.token || ''
  }
  return config
})
