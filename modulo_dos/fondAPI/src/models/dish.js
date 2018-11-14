const mongoose = require('mongoose')

const {Schema} = mongoose

const schema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true,
    maxlength: 140
  }
})

// const model = mongoose.model(schema)

module.exports = {
  model: mongoose.model('Dish', schema),
  schema 
}

