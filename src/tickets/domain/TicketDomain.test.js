import * as TicketDomain from './TicketDomain'
import { mockTicket } from '../TicketMocks'

describe('getReportableStatus', () => {
  it('For non-assigned tickets or pending ticket, should always return pending', () => {
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'pending', assignee: null })
      )
    ).toEqual('pending')
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'pending', assignee: 'user1' })
      )
    ).toEqual('pending')
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'resolved', assignee: null })
      )
    ).toEqual('pending')
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'wait for reply', assignee: null })
      )
    ).toEqual('pending')
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'contacted', assignee: null })
      )
    ).toEqual('pending')
  })

  it('For contacted tickets, should return assigned', () => {
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'contacted', assignee: 'user1' })
      )
    ).toEqual('assigned')
  })

  it('For "wait for reply" tickets, should return "waiting"', () => {
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'wait for reply', assignee: 'user1' })
      )
    ).toEqual('waiting')
  })

  it('For "resolved" tickets, should return "resovled"', () => {
    expect(
      TicketDomain.getReportableStatus(
        mockTicket({ status: 'resolved', assignee: 'user1' })
      )
    ).toEqual('resolved')
  })
})
