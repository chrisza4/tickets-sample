import { unauthenticatedRest } from '../../api/client'

export async function login(username, password) {
  try {
    const response = await unauthenticatedRest('POST', '/login', {
      username,
      password,
    })
    return {
      token: response.data.token,
    }
  } catch (err) {
    return {
      token: null,
    }
  }
}
