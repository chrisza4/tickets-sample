import axios from 'axios'

export function authenticatedRest(method, url, data) {
  const token = localStorage.getItem('access_token')
  if (!token) {
    throw Error('Unexpected authenticated call when access token not exists')
  }
  return axios({
    method,
    url,
    headers: localStorage.getItem('access_token'),
    data,
  })
}

export function unauthenticatedRest(method, url, data) {
  return axios({
    method,
    url,
    data,
  })
}
