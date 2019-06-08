import * as AuthActionTypes from '../actions/AuthActionTypes'
export const initialState = {
  token: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case AuthActionTypes.AUTH_INIT: {
      return {
        token: action.token,
      }
    }
    case AuthActionTypes.AUTH_SUCCESS: {
      return {
        token: action.token,
      }
    }
    case AuthActionTypes.LOGOUT: {
      return {
        token: null,
      }
    }
    default: {
      return state
    }
  }
}
