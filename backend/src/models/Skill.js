const mongoose = require('mongoose')
const { Schema } = mongoose

const skillSchema = new Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  showFilter: { type: Boolean, required: true }
})

module.exports = mongoose.model('Skill', skillSchema)

//TODO Ajout de l'url de l'image du skill avec une gestion multer et resize image
