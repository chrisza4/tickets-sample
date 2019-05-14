const tickets = require('../Tickets.json')
function setup(app) {
  app.get('/tickets', (req, res) => {
    res.json({
      ok: true,
      data: tickets,
    })
  })
}

module.exports = {
  setup,
}
