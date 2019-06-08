import * as TicketActionTypes from '../actions/TicketActionTypes'
import * as TicketServices from '../services/TicketServices'
import store from '../../store'

export async function fetchTickets(reduxStore = store) {
  reduxStore.dispatch({
    type: TicketActionTypes.TICKETS_FETCHING,
  })
  const response = await TicketServices.fetchTickets()
  if (response.ok) {
    reduxStore.dispatch({
      type: TicketActionTypes.TICKETS_FETCHED,
      data: response.tickets,
    })
  } else {
    reduxStore.dispatch({
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    })
  }
}

export function selectTicket(id) {
  return {
    type: TicketActionTypes.TICKET_SELECTED,
    id: id,
  }
}

export function toggleResolved() {
  return {
    type: TicketActionTypes.TICKETS_TOGGLE_RESOLVED,
  }
}

export async function setStatus(ids, status, reduxStore = store) {
  const response = await TicketServices.setStatus(ids, status)
  console.log(response)
  if (response.ok) {
    reduxStore.dispatch({
      type: TicketActionTypes.TICKETS_FETCHED,
      data: response.tickets,
    })
  } else {
    reduxStore.dispatch({
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    })
  }
}
