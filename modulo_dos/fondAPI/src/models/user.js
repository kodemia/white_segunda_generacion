const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  }
})

module.exports = {
  model: mongoose.model('user', userSchema),
  schema: userSchema
}