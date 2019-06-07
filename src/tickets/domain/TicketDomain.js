import moment from 'moment'
export function isUnresolvedForTooLong(ticket) {
  return (
    ticket.status === 'pending' &&
    moment(ticket.date).isBefore(moment().subtract(5, 'days'))
  )
}

export function isAssigned(ticket) {
  return ticket.assignee && ticket.status !== 'pending'
}
