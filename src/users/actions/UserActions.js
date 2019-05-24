import axios from 'axios'
import * as UserActionTypes from '../actions/UserActionTypes'
import store from '../../store'

export async function fetchUsers() {
  store.dispatch({
    type: UserActionTypes.USERS_FETCHING,
  })
  try {
    const response = await axios.get('http://localhost:3333/users')
    store.dispatch({
      type: UserActionTypes.USERS_FETCHED,
      data: response.data.data,
    })
  } catch (err) {
    store.dispatch({
      type: UserActionTypes.USERS_FETCH_ERROR,
    })
  }
}
