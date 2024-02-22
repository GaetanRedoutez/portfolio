const express = require('express')
const router = express.Router()

const projectControl = require('../controllers/project')

router.get('/', projectControl.getProjects)

module.exports = router
