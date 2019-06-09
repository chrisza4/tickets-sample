import { put, call } from 'redux-saga/effects'
import { mockTicket } from '../TicketMocks'
import {
  fetchTicketsSaga,
  deleteTicketsSaga,
  updateTicketSagas,
} from './TicketActions'
import * as TicketServices from '../services/TicketServices'
import * as TicketActionTypes from '../actions/TicketActionTypes'

describe('FetchTicket', () => {
  it('Should put data into store if fetch completed', () => {
    const generator = fetchTicketsSaga()
    const tickets = [mockTicket()]
    expect(generator.next().value).toEqual(call(TicketServices.fetchTickets))
    expect(
      generator.next({
        ok: true,
        tickets,
      }).value
    ).toEqual(
      put({
        type: TicketActionTypes.TICKETS_FETCHED,
        data: tickets,
      })
    )
  })

  it('Should put fetch error into store if fetch failed', () => {
    const generator = fetchTicketsSaga()
    expect(generator.next().value).toEqual(call(TicketServices.fetchTickets))
    expect(
      generator.next({
        ok: false,
      }).value
    ).toEqual(
      put({
        type: TicketActionTypes.TICKETS_FETCH_ERROR,
      })
    )
  })
})

describe('Delete tickets', () => {
  it('Should put data into store if delete completed', () => {
    const generator = deleteTicketsSaga({ ids: ['ticket1'] })
    expect(generator.next().value).toEqual(
      call(TicketServices.deleteTickets, ['ticket1'])
    )
    expect(
      generator.next({
        ok: true,
      }).value
    ).toEqual(
      put({
        type: TicketActionTypes.TICKET_DELETED,
        ids: ['ticket1'],
      })
    )
  })

  it('Should put fetch error into store if fetch failed', () => {
    const generator = deleteTicketsSaga({ ids: ['ticket1'] })
    expect(generator.next().value).toEqual(
      call(TicketServices.deleteTickets, ['ticket1'])
    )
    expect(
      generator.next({
        ok: false,
      }).value
    ).toEqual(
      put({
        type: TicketActionTypes.TICKETS_DELETED_FAILED,
      })
    )
  })
})

describe('Updating tickets', () => {
  it('Should put data into store if Update completed', () => {
    const generator = updateTicketSagas({
      ids: ['ticket1'],
      status: 'resolved',
    })
    const tickets = [mockTicket({ status: 'resolved ' })]
    expect(generator.next().value).toEqual(
      call(TicketServices.setStatus, ['ticket1'], 'resolved')
    )
    expect(
      generator.next({
        ok: true,
        tickets,
      }).value
    ).toEqual(
      put({
        type: TicketActionTypes.TICKET_UPDATED,
        data: tickets,
      })
    )
  })

  it.skip('Should put fetch error into store if fetch failed', () => {
    const generator = updateTicketSagas({
      ids: ['ticket1'],
      status: 'resolved',
    })
    expect(generator.next().value).toEqual(
      call(TicketServices.setStatus, ['ticket1'], 'resolved')
    )
    expect(
      generator.next({
        ok: false,
      }).value
    ).toEqual(
      put({
        type: TicketActionTypes.TICKET_UPDATING_FAILED,
      })
    )
  })
})
