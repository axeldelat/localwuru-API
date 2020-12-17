const jwt = require('../lib/jwt')

function auth (request, response, next) {
  try {
    const { authorization } = request.headers
    if (!authorization) throw new Error('You have no access')
    const payload = jwt.verify(authorization, process.env.JWT_SECRET)
    console.log(payload)
    // if (!payload) {
    //   return response.status(401).json({ msg: 'Authorization denied' })
    // }
    // // console.log('payload: ', payload)
    // console.log('authorization: ', authorization)
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
