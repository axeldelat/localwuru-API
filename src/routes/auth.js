const express = require('express')
const users = require('../usecases/users')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/signup', async (request, response) => {
  try {
    const { name, presentation, phone, email, password, paypalme, gender, birthdate, bio } = request.body

    const userCreated = await users.signup(name, presentation, phone, email, password, paypalme, gender, birthdate, bio)

    response.json({
      success: true,
      message: 'user created',
      data: {
        userCreated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})
router.get('/', auth, async (request, response) => {
  try {
    const allUsers = await users.getAll()

    response.json({
      success: true,
      message: 'All users',
      data: {
        allUsers: allUsers
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body

    const token = await users.login(email, password)
    console.log(token)
    response.json({
      success: true,
      message: 'logged in',
      data: {
        token,
        message: 'logged in correctly'
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/profile', auth, async (request, response) => {
  try {
    const { authorization } = request.headers
    const profile = await users.getUserInfo(authorization)
    response.json({
      success: true,
      profile
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/experiences', auth, async (request, response) => {
  try {
    const { authorization } = request.headers
    const experiences = await users.getExperiences(authorization)
    response.json({
      success: true,
      experiences
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
