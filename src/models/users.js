const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  presentation: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
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
