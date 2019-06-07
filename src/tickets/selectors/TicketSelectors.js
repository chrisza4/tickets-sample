import { createSelector } from 'reselect'
import { isAssigned } from '../domain/TicketDomain'

export const selectLoadState = state => state.tickets.loadState
export const selectTickets = state => state.tickets.tickets
export const selectShowResolved = state => state.tickets.showResolved

export const selectResolvedTickets = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => t.status === 'resolved')
  }
)

export const selectResolvedTicketsCount = createSelector(
  selectResolvedTickets,
  resolvedTickets => resolvedTickets.length
)

export const selectAssignedTicketsCount = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => isAssigned(t)).length
  }
)

export const selectWaitingTicketsCount = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => t.status === 'wait for reply').length
  }
)

export const selectTicketsPendingCount = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => t.status === 'pending').length
  }
)
