const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

function create (payload = {}) {
  return jwt.sign(payload, secret, { expiresIn: '1d' }) // 1y 1m 1d 1s
}

function verify (token) {
  return jwt.verify(token, secret)
}

function decode (token) {
  return jwt.decode(token)
}
module.exports = {
  create,
  verify,
  decode
}
