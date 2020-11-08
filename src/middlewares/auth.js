const jwt = require('../lib/jwt')

function auth (request, response, next) {
  try {
    const { authorization } = request.headers
    const payload = jwt.verify(authorization)
    console.log('payload: ', payload)
    console.log('authorization: ', authorization)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
}

module.exports = auth
