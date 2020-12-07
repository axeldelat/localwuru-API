const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  title: {
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
  season: {
    type: String,
    required: true
  },
  categories: {
    type: Object,
    required: false
  },
  image: { // revisar
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  recommendations: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required:false
  },
  bucketed: {
    type: Number,
    required: null
  }
})

module.exports = mongoose.model('experiences', experienceSchema)
