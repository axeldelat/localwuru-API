const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

// protocolo://user:passord@host/dbname

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const mongoose = require('mongoose')
function connect () {
  return mongoose.connect(
    url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
}

module.exports = {
  connect
}

