import { createSelector } from 'reselect'
import { getReportableStatus } from '../domain/TicketDomain'

export const selectLoadState = state => state.tickets.loadState
export const selectTickets = state => Object.values(state.tickets.tickets)
export const selectTicketMap = state => state.tickets.tickets
export const selectShowResolved = state => state.tickets.showResolved
export const selectSelectedTicketIds = state => state.tickets.selectedTicketIds
export const selectTicketIndex = state => state.tickets.index

export const selectResolvedTickets = createSelector(
  [selectTicketMap, selectTicketIndex],
  (tickets, index) => {
    return index.resolved.map(id => tickets[id])
  }
)

export const selectResolvedTicketsCount = createSelector(
  selectResolvedTickets,
  resolvedTickets => resolvedTickets.length
)

export const selectAssignedTicketsCount = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => getReportableStatus(t) === 'assigned').length
  }
)

export const selectWaitingTicketsCount = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => getReportableStatus(t) === 'waiting').length
  }
)

export const selectTicketsPendingCount = createSelector(
  selectTickets,
  tickets => {
    return tickets.filter(t => getReportableStatus(t) === 'pending').length
  }
)

export const selectDisplayedTickets = createSelector(
  [selectTickets, selectResolvedTickets, selectShowResolved],
  (tickets, resolvedTickets, showResolved) => {
    return showResolved ? resolvedTickets : tickets
  }
)
