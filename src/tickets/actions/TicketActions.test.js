import axios from 'axios'
import { mockTicket } from '../TicketMocks'
import { fetchTickets } from './TicketActions'
import * as TicketActionTypes from './TicketActionTypes'
jest.mock('axios')

describe('FetchTickets', () => {
  it('Given fetch completed, should dispatch TICKET_FETCHING and TICKETS_FECTED', async () => {
    const mockStore = { dispatch: jest.fn() }
    const ticket1 = mockTicket({ id: 't1' })
    const ticket2 = mockTicket({ id: 't2' })
    axios.get.mockResolvedValue({
      data: {
        data: [ticket1, ticket2],
      },
    })
    await fetchTickets(mockStore)
    expect(mockStore.dispatch.mock.calls[0][0].type).toEqual(
      TicketActionTypes.TICKETS_FETCHING
    )
    expect(mockStore.dispatch.mock.calls[1][0]).toEqual({
      type: TicketActionTypes.TICKETS_FETCHED,
      data: [ticket1, ticket2],
    })
    expect(axios.get.mock.calls[0][0]).toEqual('http://localhost:3333/tickets')
  })

  it('Given fetch failed, should dispatch TICKET_FETCHING and TICKETS_FETCH_ERROR', async () => {
    axios.get.mockRejectedValue(new Error('Failed'))
    const mockStore = { dispatch: jest.fn() }
    await fetchTickets(mockStore)
    expect(mockStore.dispatch.mock.calls[0][0].type).toEqual(
      TicketActionTypes.TICKETS_FETCHING
    )
    expect(mockStore.dispatch.mock.calls[1][0]).toEqual({
      type: TicketActionTypes.TICKETS_FETCH_ERROR,
    })
    expect(axios.get.mock.calls[0][0]).toEqual('http://localhost:3333/tickets')
  })
})
