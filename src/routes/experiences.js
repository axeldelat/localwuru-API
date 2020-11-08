const express = require('express')
const experiences = require('../usecases/experiences')
const router = express.Router()

// const auth = require('../middlewares/auth')

router.get('/', async (request, response) => {
  try {
    const allExperiences = await experiences.getAll()

    response.json({
      success: true,
      message: 'All Experiences',
      data: {
        experiences: allExperiences
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

router.post('/', async (request, response) => {
  try {
    const {
      nameExperience,
      city,
      state,
      country,
      availableSeason,
      images,
      typeOfExperience,
      duration,
      suggestedBudget,
      previousRecommendations,
      experienceDescription
    } = request.body

    const newExperience = await experiences.create({
      nameExperience,
      city,
      state,
      country,
      availableSeason,
      images,
      typeOfExperience,
      duration,
      suggestedBudget,
      previousRecommendations,
      experienceDescription
    })

    response.json({
      success: true,
      message: 'Experience added',
      data: {
        experience: newExperience
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

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const experienceSelected = await experiences.getById(id)

    response.json({
      success: true,
      message: 'experience selected',
      data: {
        experience: experienceSelected
      }
    })

    const selectedExperience = await experiences.getById(id)
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedExperience = await experiences.deleteById(id)

    response.json({
      success: true,
      message: 'experience deleted',
      data: {
        experience: deletedExperience
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
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataExperience = request.body

    const experienceUpdated = await experiences.updateById(id, newDataExperience)
    response.json({
      success: true,
      message: 'Experience updated',
      data: {
        experiences: experienceUpdated
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

module.exports = router

// exportamos nuestro router pero falata montarlo en el servidor.

// Vamos en el post. No nos regresó lo que esperabamos.
