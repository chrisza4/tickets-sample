import * as TicketActionTypes from '../actions/TicketActionTypes'
import LoadState from '../../loadState/LoadState'

export const initialState = {
  loadState: LoadState.NONE,
  tickets: [],
  showResolved: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TicketActionTypes.TICKETS_FETCHED:
      return {
        ...state,
        tickets: action.data,
        loadState: LoadState.LOADED,
      }
    case TicketActionTypes.TICKETS_FETCHING:
      return {
        ...state,
        loadState: LoadState.LOADING,
      }
    case TicketActionTypes.TICKETS_FETCH_ERROR:
      return {
        ...state,
        loadState: LoadState.ERROR,
      }
    case TicketActionTypes.TICKETS_TOGGLE_RESOLVED:
      return {
        ...state,
        showResolved: !state.showResolved,
      }
    default:
      return state
  }
}
