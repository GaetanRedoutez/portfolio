const Project = require('../models/Project')

exports.getProjects = (req, res, next) => {
  console.log('Request : getProjects')
  Project.find()
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json({ error }))
}
