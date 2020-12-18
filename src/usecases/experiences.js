const Experiences = require('../models/experiences')

function getAll () {
  return Experiences.find()
}

function create (ExperienceData) {
  return Experiences.create(ExperienceData)
}

function getByAuthor (author_id) {
  return Experiences.find({author_id: `${author_id}`}).exec()
}

function getById (id) {
  return Experiences.findById(id)
}

function deleteById (id) {
  return Experiences.findByIdAndDelete(id)
}

function updateById (id, newExperienceData) {
  return Experiences.findByIdAndUpdate(id, newExperienceData)
}

module.exports = {
  getAll,
  create,
  getById,
  getByAuthor,
  deleteById,
  updateById
}
