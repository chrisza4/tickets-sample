<<<<<<< HEAD
import { getReportableStatus } from '../domain/TicketDomain'

=======
>>>>>>> Make index
export function buildTicketIndexes(oldIndex, newTickets) {
  // Remove
  const updateIndex = newTickets.reduce(
    (acc, ticket) => {
      if (
        oldIndex.resolved.includes(ticket.id) &&
        getReportableStatus(ticket) !== 'resolved'
      ) {
        acc.toRemoved[ticket.id] = true
      } else if (
        !oldIndex.resolved.includes(ticket.id) &&
        getReportableStatus(ticket) === 'resolved'
      ) {
        acc.toAdded.push(ticket.id)
      }
      return acc
    },
    { toAdded: [], toRemoved: {} }
  )

  // Add
  return {
    resolved: [
      ...oldIndex.resolved.filter(c => !updateIndex.toRemoved[c]),
      ...updateIndex.toAdded,
    ],
  }
}
