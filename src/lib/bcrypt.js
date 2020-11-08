const bcrypt = require('bcrypt')
// Ya nomas ocupamos la librería, no el paquete.
const salt = 10

function hash (plainText) {
  return bcrypt.hashSync(plainText, salt) // los saltos
}

function compare (plainText, hash) {
  return bcrypt.compareSync(plainText, hash) // compara texto plano con el hash en la base de datos.
}

module.exports = {
  hash,
  compare
}
