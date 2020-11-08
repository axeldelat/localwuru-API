// Definición del  servidor

const express = require('express')

const experiencesRouter = require('./routes/experiences')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())

app.use('/experiences', experiencesRouter)

app.use('/auth', authRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'local-wuru API'
  })
})

module.exports = app
