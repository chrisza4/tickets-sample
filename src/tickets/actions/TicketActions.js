import axios from 'axios'
import * as TicketActionTypes from '../actions/TicketActionTypes'
import store from '../../store'

export async function fetchTickets(reduxStore = store) {
  reduxStore.dispatch({
    type: TicketActionTypes.TICKETS_FETCHING,
  })
  try {
    const response = await axios.get('http://localhost:3333/tickets')
    reduxStore.dispatch({
      type: TicketActionTypes.TICKETS_FETCHED,
      data: response.data.data,
    })
  } catch (err) {
    reduxStore.dispatch({
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    })
  }
}

export function toggleResolved() {
  return {
    type: TicketActionTypes.TICKETS_TOGGLE_RESOLVED,
  }
}
