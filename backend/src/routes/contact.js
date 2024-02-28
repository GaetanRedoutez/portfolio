const express = require('express')
const router = express.Router()
const { contactForm } = require('../controllers/contact')

// Route pour gérer les soumissions de formulaire de contact
router.post('/contact', async (req, res, next) => {
  console.log(req.body)
  const { name, email, subject, message } = req.body
  try {
    const response = await contactForm(name, email, subject, message)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
