import { api } from './instance/index'
import { ISignUp, ISignIn } from '../interfaces/IAuth'

export const signUpReq = (data: ISignUp) => {
  return api.post('/auth/create', data)
}

export const signInReq = (data: ISignIn) => {
  return api.post('/auth/login', data)
}
