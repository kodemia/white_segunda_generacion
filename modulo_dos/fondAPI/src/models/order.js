const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  dishes: {
    type: [String],
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 20,
    minlength: 2
  },
  status: {
    type: String,
    required: true,
    enum: [
      'active',
      'sent',
      'approved',
      'preparing',
      'ready',
      'dispatched',
      'payed',
      'cancelled'
    ]
  }
})

module.exports = { 
  schema,
  model: mongoose.model('Order', schema) 
}