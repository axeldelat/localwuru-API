const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  nameExperience: {
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
  availableSeason: {
    type: String,
    required: true
  },
  images: { // revisar
    type: String,
    required: true
  },
  typeOfExperience: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  suggestedBudget: {
    type: String,
    required: true
  },
  previousRecommendations: {
    type: String,
    required: true
  },
  experienceDescription: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('experiences', experienceSchema)
