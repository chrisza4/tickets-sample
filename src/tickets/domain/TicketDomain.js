import moment from 'moment'
export function isUnresolvedForTooLong(ticket) {
  return (
    ticket.status === 'unresolved' &&
    moment(ticket.date).isBefore(moment().subtract(5, 'days'))
  )
}
