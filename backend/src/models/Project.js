const mongoose = require('mongoose')
const { Schema } = mongoose

const projectSchema = new Schema({
  id: { type: String, required: true },
  base: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  demo: { type: Boolean, required: true },
  link: { type: String, required: true },
  github: { type: String, required: true },
  skills: [{ type: String, required: true }],
  description: { type: String, required: true }
})

module.exports = mongoose.model('Project', projectSchema)

//TODO Ajout de l'url de l'image du skill avec une gestion multer et resize image
