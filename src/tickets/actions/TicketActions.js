import * as TicketActionTypes from '../actions/TicketActionTypes'
import * as TicketServices from '../services/TicketServices'
import { takeEvery, put, all, call } from 'redux-saga/effects'
import store from '../../store'

export function* fetchTicketsSaga() {
  const response = yield call(TicketServices.fetchTickets)
  if (response.ok) {
    yield put({
      type: TicketActionTypes.TICKETS_FETCHED,
      data: response.tickets,
    })
  } else {
    yield put({
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    })
  }
}

export function fetchTickets(reduxStore = store) {
  return reduxStore.dispatch({
    type: TicketActionTypes.TICKETS_FETCHING,
  })
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

export function* deleteTicketsSaga({ ids }, reduxStore = store) {
  const response = yield call(TicketServices.deleteTickets, ids)
  if (response.ok) {
    yield put({
      type: TicketActionTypes.TICKET_DELETED,
      ids: ids,
    })
  } else {
    yield put({
      type: TicketActionTypes.TICKETS_DELETED_FAILED,
    })
  }
}

export async function deleteTickets(ids) {
  store.dispatch({
    type: TicketActionTypes.TICKET_DELETING,
    ids,
  })
}

export function* mainSaga() {
  yield all([
    takeEvery(TicketActionTypes.TICKETS_FETCHING, fetchTicketsSaga),
    takeEvery(TicketActionTypes.TICKET_DELETING, deleteTicketsSaga),
  ])
}
