const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: false
  },
  birthDate: {
    type: Date,
    required: false
  },
  presentation: {
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
  gender: {
    type: String,
    required: false
  },
  paypalme: { // definir cuándo lo puede agregar
    type: String,
    required: false
  },
  avatar: { // definir cuándo puede agregarlo
    type: String,
    required: false
  },
})

module.exports = mongoose.model('users', userSchema)

/*
1.- Cómo manejar el bucketList
2.- Revisar los datos de los modelos
*/
