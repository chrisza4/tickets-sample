import * as TicketActionTypes from '../actions/TicketActionTypes'
import TicketReducers, { initialState } from './TicketReducers'
import LoadState from '../../loadState/LoadState'
import { mockTicket } from '../TicketMocks'

describe('TicketReducer', () => {
  it('Given received TICKETS_FETCHED, merge data into state and set loading state to loaded', () => {
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data: [mockTicket({ id: 'ticket1' }), mockTicket({ id: 'ticket2' })],
    }
    const newState = TicketReducers(initialState, action)
    expect(newState.tickets).toEqual(action.data)
    expect(newState.loadState).toEqual(LoadState.LOADED)
  })

  it('Given received TICKET_FETCHING, set load state to loading', () => {
    const action = {
      type: TicketActionTypes.TICKETS_FETCHING,
    }
    const newState = TicketReducers(initialState, action)
    expect(newState.loadState).toEqual(LoadState.LOADING)
  })

  it('Given recevied TICKETS_FETCH_ERROR, set load state to error', () => {
    const action = {
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    }
    const newState = TicketReducers(initialState, action)
    expect(newState.loadState).toEqual(LoadState.ERROR)
  })
})
