const express = require('express')
const router = express.Router()

const skillControl = require('../controllers/skill')

router.get('/', skillControl.getSkills)

module.exports = router
