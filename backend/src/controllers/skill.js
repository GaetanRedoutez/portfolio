const Skill = require('../models/Skill')

exports.getSkills = (req, res, next) => {
  console.log('Request : getSkills')
  Skill.find()
    .then((skill) => res.status(200).json(skill))
    .catch((error) => res.status(404).json({ error }))
}
