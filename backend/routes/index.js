const {
  getTickets,
  getUsers,
  assignTicket,
  markTicketResolve,
  setStatus,
  deleteTicket,
} = require('./data')

function setup(app) {
  app.get('/tickets', (req, res) => {
    setTimeout(() => {
      res.json({
        ok: true,
        data: getTickets(),
      })
    }, 300)
  })

  app.get('/users', (req, res) => {
    setTimeout(() => {
      res.json({
        ok: true,
        data: getUsers(),
      })
    }, 300)
  })

  app.post('/tickets/assign/:ticketId/:userId', (req, res) => {
    setTimeout(() => {
      assignTicket(req.params.ticketId, req.params.userId)
      res.json({
        ok: true,
      })
    }, 300)
  })

  app.post('/tickets/resolve/:ticketId', (req, res) => {
    setTimeout(() => {
      markTicketResolve(req.params.ticketId)
      res.json({
        ok: true,
      })
    }, 300)
  })

  app.post('/login', (req, res) => {
    if (req.body.username === 'test' && req.body.password === 'test1') {
      res.json({
        ok: true,
        token: 'some-access-token',
      })
    } else {
      res.status(401).json({ ok: false })
    }
  })

  app.post('/tickets/status', (req, res) => {
    const { ids, status } = req.body
    const statuses = ['resolved', 'wait for reply', 'contacted', 'pending']
    if (!statuses.includes(status)) {
      res.status(400).json({ ok: false, error: 'Invalid status' })
    }
    const tickets = setStatus(ids, status)
    return res.json({ ok: true, data: tickets })
  })

  app.delete('/tickets/:id', (req, res) => {
    setTimeout(() => {
      deleteTicket(req.params.ticketId)
      res.json({
        ok: true,
      })
    }, 300)
  })
}

module.exports = {
  setup,
}
