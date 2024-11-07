const mongoose = require('mongoose')

const User = mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   phoneNumber: {
      type: String,
      required: true
   },
   gender: {
      type: String,
      required: true
   },
   dateBorn: {
      type: Date,
      required: true
   },
   user_image: {
      type: String,
      required: false
   },
   user_description: {
      type: String,
      required: false
   },
   user_languages: {
      type: String,
      required: false
   },
   user_skills: {
      type: [String],
      required: false
   },
   member_since: {
      type: Date,
      required: false
   },
   certified: {
      type: [String],
      required: false
   },
   user_country: {
      type: String,
      required: false
   }
})

module.exports = mongoose.model('users', User)