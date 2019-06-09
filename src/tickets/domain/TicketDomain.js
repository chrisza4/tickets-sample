import moment from 'moment'
export function isUnresolvedForTooLong(ticket) {
  return (
    ticket.status === 'pending' &&
    moment(ticket.date).isBefore(moment().subtract(5, 'days'))
  )
}

export function getReportableStatus(ticket) {
  if (!ticket.assignee || ticket.status === 'pending') {
    return 'pending'
  }
  if (ticket.status === 'contacted') {
    return 'assigned'
  }
  if (ticket.status === 'wait for reply') {
    return 'waiting'
  }
  return 'resolved'
}
