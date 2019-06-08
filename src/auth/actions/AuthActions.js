import * as AuthActionTypes from './AuthActionTypes'
import * as AuthService from '../services/AuthService'
import store from '../../store'

export function AuthInit() {
  return {
    type: AuthActionTypes.AUTH_INIT,
    token: localStorage.getItem('access_token'),
  }
}
export function signout() {
  store.dispatch({
    type: AuthActionTypes.LOGOUT,
  })
}

export async function login(username, password) {
  const { token } = await AuthService.login(username, password)
  if (token) {
    localStorage.setItem('access_token', token)
    store.dispatch({
      type: AuthActionTypes.AUTH_SUCCESS,
      token,
    })
    return { ok: true }
  } else
    return {
      ok: false,
      err: 'Invalid username or password',
    }
}
