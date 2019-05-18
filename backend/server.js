const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(cors())

routes.setup(app)

module.exports = app
