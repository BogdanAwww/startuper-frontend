import { cookie } from '../utils/cookie'
import router from 'next/router'

type UseAuth = [
  boolean,
  () => void
]

export const useAuth = (): UseAuth => {
  const auth = !!cookie.get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)

  const exit = () => {
    cookie.delete(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)
    router.push('/')
  }

  return [auth, exit]
}
