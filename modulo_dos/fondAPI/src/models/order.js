const { Schema, model: Model } = require('mongoose')

const schema = new Schema({
  dishes: {
    type: [String],
    required: true
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

const model = Model(schema)

module.exports = { schema, model }