const tickets = require('../Tickets.json')
function setup(app) {
  app.get('/tickets', (req, res) => {
    setTimeout(() => {
      res.json({
        ok: true,
        data: tickets,
      })
    }, 300)
  })
}

module.exports = {
  setup,
}
