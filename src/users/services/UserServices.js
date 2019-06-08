import { authenticatedRest } from '../../api/client'

export async function fetchUsers() {
  try {
    const response = await authenticatedRest('GET', '/users')
    return {
      ok: true,
      users: response.data.data,
    }
  } catch (err) {
    return {
      ok: false,
      error: err.message,
    }
  }
}
