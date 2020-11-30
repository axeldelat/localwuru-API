require('dotenv').config()

const db = require('./src/lib/db')

const server = require('./src/server')
const app = require('./src/server')

const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('DB CONNECTED')
    server.listen(8080, () => console.log('server running on port ', PORT))
  })

db.connect()
  .then(() => {
    console.log('DB CONNECTED')
  })
  .catch(error => {
    console.log('DB ERROR: ', error)
  })
