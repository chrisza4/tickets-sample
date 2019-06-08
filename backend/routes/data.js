const keyBy = require('lodash.keyby')
const tickets = require('../Tickets.json')
const users = require('../Users.json')

const ticketMap = keyBy(tickets, ticket => ticket.id)
const usersMap = keyBy(users, user => user.id)

function getTickets() {
  return tickets
}

function getUsers() {
  return users
}

function markTicketResolve(ticketId) {
  const ticket = ticketMap[ticketId]
  if (!ticket) {
    return
  }
  ticket.status = 'resolve'
}

function assignTicket(ticketId, userId) {
  const user = usersMap[userId]
  const ticket = ticketMap[ticketId]
  if (!ticket || !user) {
    return
  }
  ticket.assignee = userId
  return
}

function setStatus(ticketIds, status) {
  const tickets = ticketIds
    .map(ticketId => ticketMap[ticketId])
    .filter(t => !!t)
  for (const t of tickets) {
    t.status = status
  }
  return tickets
}

module.exports = {
  getTickets,
  getUsers,
  markTicketResolve,
  assignTicket,
  setStatus,
}
