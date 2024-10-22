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
   }
})

module.exports = mongoose.model('users', User)