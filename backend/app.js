require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const skillRoute = require('./src/routes/skill')
const projectRoute = require('./src/routes/project')
const resumeRoute = require('./src/routes/resume')
const contactRoute = require('./src/routes/contact')

const app = express()
app.use(bodyParser.json())

async function dbConnection() {
  // MongoDB connection string
  const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@data.eab3clg.mongodb.net/portfolio-data`
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(connectionString)
    console.log('Connection to MongoDB with Mongoose : Success !')
  } catch (error) {
    console.error(
      'Connection to MongoDB with Mongoose : Failed !',
      ' Error : ',
      error
    )
  }
}

dbConnection().catch((err) => console.error(err))

// Middleware for handling CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, Origin, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use('/api/v1/skills', skillRoute)
app.use('/api/v1/projects', projectRoute)
app.use('/api/v1', resumeRoute)

app.use('/api/v1', contactRoute)

// Serve static images from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'public/images')))

module.exports = app
