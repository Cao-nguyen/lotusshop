const express = require('express')
const serverless = require('serverless-http')
const app = express()

// config
const configEngine = require('../src/config/configEngine')
configEngine(app)

// routes
const webRoutes = require('../src/routes/client')
app.use(webRoutes)

module.exports = serverless(app)