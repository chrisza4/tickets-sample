import * as TicketActionTypes from '../actions/TicketActionTypes'

const initialState = {
  data: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TicketActionTypes.TICKETS_FETCHED:
      return {
        ...state,
        tickets: action.data,
      }
    default:
      return state
  }
}
