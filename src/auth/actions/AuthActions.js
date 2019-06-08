import axios from 'axios'
import * as AuthActionTypes from './AuthActionTypes'
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
  try {
    const response = await axios.post('http://localhost:3333/login', {
      username,
      password,
    })
    localStorage.setItem('access_token', response.data.token)
    store.dispatch({
      type: AuthActionTypes.AUTH_SUCCESS,
      token: response.data.token,
    })
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      err: 'Invalid username or password',
    }
  }
}
