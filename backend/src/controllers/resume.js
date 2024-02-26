const {
  HardSkill,
  Experience,
  Formation,
  Language,
  SoftSkill,
  Hobby
} = require('../models/Resume')

exports.getHardSkill = (req, res, next) => {
  console.log('Request : getHardSkill')
  HardSkill.find()
    .then((hardSkill) => res.status(200).json(hardSkill))
    .catch((error) => res.status(404).json({ error }))
}

exports.getExperience = (req, res, next) => {
  console.log('Request : getExperience')
  Experience.find()
    .then((experience) => res.status(200).json(experience))
    .catch((error) => res.status(404).json({ error }))
}

exports.getFormation = (req, res, next) => {
  console.log('Request : getFormation')
  Formation.find()
    .then((formation) => res.status(200).json(formation))
    .catch((error) => res.status(404).json({ error }))
}

exports.getLanguage = (req, res, next) => {
  console.log('Request : getLanguage')
  Language.find()
    .then((language) => res.status(200).json(language))
    .catch((error) => res.status(404).json({ error }))
}

exports.getSoftSkill = (req, res, next) => {
  console.log('Request : getSoftSkill')
  SoftSkill.find()
    .then((softSkill) => res.status(200).json(softSkill))
    .catch((error) => res.status(404).json({ error }))
}

exports.getHobby = (req, res, next) => {
  console.log('Request : getHobby')
  Hobby.find()
    .then((hobby) => res.status(200).json(hobby))
    .catch((error) => res.status(404).json({ error }))
}
