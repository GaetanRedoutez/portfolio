const mongoose = require('mongoose')
const { Schema } = mongoose

const hardSkillSchema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: true }
})

const experienceSchema = new Schema({
  name: { type: String, required: true },
  society: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  mission: { type: String, required: true }
})

const formationSchema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  school: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  city: { type: String, required: true },
  cover: { type: String }
})

const languageSchema = new Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }
})

const softSkillSchema = new Schema({
  name: { type: String, required: true }
})

const hobbySchema = new Schema({
  name: { type: String, required: true }
})

const HardSkill = mongoose.model('HardSkill', hardSkillSchema)
const Experience = mongoose.model('Experience', experienceSchema)
const Formation = mongoose.model('Formation', formationSchema)
const Language = mongoose.model('Language', languageSchema)
const SoftSkill = mongoose.model('SoftSkill', softSkillSchema)
const Hobby = mongoose.model('Hobby', hobbySchema)

module.exports = {
  HardSkill,
  Experience,
  Formation,
  Language,
  SoftSkill,
  Hobby
}
