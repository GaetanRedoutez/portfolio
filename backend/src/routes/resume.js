const express = require('express')
const router = express.Router()

const resumeControl = require('../controllers/resume')

router.get('/hard-skill', resumeControl.getHardSkill)
router.get('/experience', resumeControl.getExperience)
router.get('/formation', resumeControl.getFormation)
router.get('/language', resumeControl.getLanguage)
router.get('/soft-skill', resumeControl.getSoftSkill)
router.get('/hobby', resumeControl.getHobby)

module.exports = router
