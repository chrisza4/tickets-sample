import * as UserActionTypes from '../actions/UserActionTypes'
import LoadState from '../../loadState/LoadState'

export const initialState = {
  loadState: LoadState.NONE,
  users: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.USERS_FETCHED:
      return {
        ...state,
        users: action.data,
        loadState: LoadState.LOADED,
      }
    case UserActionTypes.USERS_FETCHING:
      return {
        ...state,
        loadState: LoadState.LOADING,
      }
    case UserActionTypes.USERS_FETCH_ERROR:
      return {
        ...state,
        loadState: LoadState.ERROR,
      }
    default:
      return state
  }
}
