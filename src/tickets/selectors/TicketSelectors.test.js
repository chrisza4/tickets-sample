import TicketReducers, { initialState } from '../reducers/TicketReducers'
import * as TicketSelectors from './TicketSelectors'
import { mockTicket } from '../TicketMocks'
import * as TicketActionTypes from '../actions/TicketActionTypes'

describe('selectTickets', () => {
  it('should return tickets', () => {
    const data = [mockTicket({ id: 'ticket1' }), mockTicket({ id: 'ticket2' })]
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data,
    }
    const newState = {
      tickets: TicketReducers(initialState, action),
    }
    const actual = TicketSelectors.selectTickets(newState)
    expect(actual).toEqual(data)
  })
})

describe('selectResolvedTickets', () => {
  it('should return only resolved tickets', () => {
    const data = [
      mockTicket({ id: 'ticket1', status: 'resolved' }),
      mockTicket({ id: 'ticket2', status: 'pending' }),
      mockTicket({ id: 'ticket3', status: 'wait for reply' }),
      mockTicket({ id: 'ticket4', status: 'contacted' }),
    ]
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data,
    }
    const newState = {
      tickets: TicketReducers(initialState, action),
    }
    const actual = TicketSelectors.selectResolvedTickets(newState)
    expect(actual).toEqual([data[0]])
  })
})

describe('selectResolvedTicketsCount', () => {
  it('should return only resolved tickets', () => {
    const data = [
      mockTicket({ id: 'ticket1', status: 'resolved' }),
      mockTicket({ id: 'ticket5', status: 'resolved' }),
      mockTicket({ id: 'ticket2', status: 'pending' }),
      mockTicket({ id: 'ticket3', status: 'wait for reply' }),
      mockTicket({ id: 'ticket4', status: 'contacted' }),
    ]
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data,
    }
    const newState = {
      tickets: TicketReducers(initialState, action),
    }
    const actual = TicketSelectors.selectResolvedTicketsCount(newState)
    expect(actual).toEqual(2)
  })
})

describe('selectAssignedTicketsCount', () => {
  it('should return only resolved tickets', () => {
    const data = [
      mockTicket({ id: 'ticket1', status: 'resolved' }),
      mockTicket({ id: 'ticket5', status: 'resolved' }),
      mockTicket({ id: 'ticket2', status: 'pending' }),
      mockTicket({ id: 'ticket3', status: 'wait for reply' }),
      mockTicket({ id: 'ticket4', status: 'contacted' }),
    ]
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data,
    }
    const newState = {
      tickets: TicketReducers(initialState, action),
    }
    const actual = TicketSelectors.selectAssignedTicketsCount(newState)
    expect(actual).toEqual(4)
  })
})

describe('selectWaitingTicketsCount', () => {
  it('should return waiting ticket', () => {
    const data = [
      mockTicket({ id: 'ticket1', status: 'wait for reply' }),
      mockTicket({ id: 'ticket5', status: 'wait for reply' }),
      mockTicket({ id: 'ticket2', status: 'pending' }),
      mockTicket({ id: 'ticket3', status: 'wait for reply' }),
      mockTicket({ id: 'ticket4', status: 'contacted' }),
    ]
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data,
    }
    const newState = {
      tickets: TicketReducers(initialState, action),
    }
    const actual = TicketSelectors.selectWaitingTicketsCount(newState)
    expect(actual).toEqual(3)
  })
})

describe('selectTicketsPendingCount', () => {
  it('should return waiting ticket', () => {
    const data = [
      mockTicket({ id: 'ticket1', status: 'wait for reply' }),
      mockTicket({ id: 'ticket5', status: 'pending' }),
      mockTicket({ id: 'ticket2', status: 'pending' }),
      mockTicket({ id: 'ticket3', status: 'pending' }),
      mockTicket({ id: 'ticket4', status: 'contacted' }),
    ]
    const action = {
      type: TicketActionTypes.TICKETS_FETCHED,
      data,
    }
    const newState = {
      tickets: TicketReducers(initialState, action),
    }
    const actual = TicketSelectors.selectTicketsPendingCount(newState)
    expect(actual).toEqual(3)
  })
})
