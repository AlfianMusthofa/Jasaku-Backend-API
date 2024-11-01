const mongoose = require('mongoose')

const Project = mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   project_name: {
      type: String,
      require: true
   },
   industry: {
      type: String,
      required: true
   },
   project_duration: {
      type: String,
      required: true
   },
   project_cost: {
      type: String,
      required: true
   },
   project_description: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: false
   },
   phoneNumber: {
      type: String,
      required: true
   },
   user_username: {
      type: String,
      required: true
   },
   user_description: {
      type: String,
      require: false,
   },
   user_languages: {
      type: [String],
      required: false
   },
   user_location: {
      type: String,
      required: false
   },
   user_memberSince: {
      type: Date,
      require: false
   }
})

module.exports = mongoose.model('projects', Project)