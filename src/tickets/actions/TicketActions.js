import axios from 'axios'
import * as TicketActionTypes from '../actions/TicketActionTypes'
import store from '../../store'

export async function fetchTickets() {
  store.dispatch({
    type: TicketActionTypes.TICKETS_FETCHING,
  })
  try {
    const response = await axios.get('http://localhost:3333/tickets')
    store.dispatch({
      type: TicketActionTypes.TICKETS_FETCHED,
      data: response.data.data,
    })
  } catch (err) {
    store.dispatch({
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    })
  }
}
