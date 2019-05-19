const {
  getTickets,
  getUsers,
  assignTicket,
  markTicketResolve,
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
}

module.exports = {
  setup,
}
