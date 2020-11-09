const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  presentation: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  paypalEmail: { // definir cuándo lo puede agregar
    type: String,
    required: false
  },
  image: { // definir cuándo puede agregarlo
    type: String,
    required: false
  },
  IDphoto: { // revisar -----------------------------------
    type: String,
    required: false
  }
})

module.exports = mongoose.model('users', userSchema)

/*
1.- Cómo manejar el bucketList
2.- Revisar los datos de los modelos
*/
