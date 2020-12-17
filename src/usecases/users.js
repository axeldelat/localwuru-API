const Users = require('../models/users')
const Experiences = require('../models/experiences')

const bcrypt = require('../lib/bcrypt')

const jwt = require('../lib/jwt')

async function signup (name, presentation, phone, email, password, paypalme, gender, birthdate, bio) {
  const user = await Users.findOne({ email })

  if (user) { throw new Error('User is already registered') }

  const hash = bcrypt.hash(password)
  return Users.create({ name, presentation, phone, email, password: hash, paypalme, gender, birthdate, bio })
}

async function login (email, password) {
  const user = await Users.findOne({ email })

  if (!user) { throw new Error('Invalid data') }

  const isValidPassword = bcrypt.compare(password, user.password)
  if (!isValidPassword) throw new Error('Invalid data')

  return jwt.create({ id: user._id })
}

async function getUserInfo (token) {
  console.log(token)
  const decoded = jwt.decode(token)
  const user = await Users.findById(decoded.id)
  return user
}

async function getExperiences (token) {
  const decoded = jwt.decode(token)
  const user = await Users.findById(decoded.id)
  const experiences = await Experiences.find({
    author_id: user._id
  })
  return experiences
}

function getAll () {
  return Users.find()
}

function getById (id) {
  return Users.findById(id)
}

module.exports = {
  signup,
  getAll,
  login,
  getUserInfo,
  getExperiences,
  getById
}
