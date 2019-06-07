import * as TicketDomain from './TicketDomain'
import { mockTicket } from '../TicketMocks'

describe('isAssigned', () => {
  it('Ticket with assignee and status is not pending, should return true', () => {
    const ticket = mockTicket({
      assignee: 'user1',
      status: 'contacted',
    })
    expect(TicketDomain.isAssigned(ticket)).toBeTruthy()
  })
  it('Ticket with no assignee and status is pending, should return false', () => {
    const ticket = mockTicket({
      assignee: 'user1',
      status: 'pending',
    })
    expect(TicketDomain.isAssigned(ticket)).toBeFalsy()
  })

  it('Ticket with no assignee, should return false', () => {
    const ticket = mockTicket({
      assignee: null,
      status: 'contacted',
    })
    expect(TicketDomain.isAssigned(ticket)).toBeFalsy()
  })
})
