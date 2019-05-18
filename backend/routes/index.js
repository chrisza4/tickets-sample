const tickets = require('../Tickets.json')
const users = require('../Users.json')

function setup(app) {
  app.get('/tickets', (req, res) => {
    setTimeout(() => {
      res.json({
        ok: true,
        data: tickets,
      })
    }, 300)
  })

  app.get('/users', (req, res) => {
    setTimeout(() => {
      res.json({
        ok: true,
        data: users,
      })
    }, 300)
  })
}

module.exports = {
  setup,
}
