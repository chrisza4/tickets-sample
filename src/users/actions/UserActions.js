import * as UserActionTypes from '../actions/UserActionTypes'
import * as UserServices from '../services/UserServices'
import store from '../../store'

export async function fetchUsers() {
  store.dispatch({
    type: UserActionTypes.USERS_FETCHING,
  })
  const response = await UserServices.fetchUsers()
  if (response.ok) {
    store.dispatch({
      type: UserActionTypes.USERS_FETCHED,
      data: response.users,
    })
  } else {
    store.dispatch({
      type: UserActionTypes.USERS_FETCH_ERROR,
    })
  }
}
