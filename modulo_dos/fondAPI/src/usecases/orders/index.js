const Order = require('../../models/order').model

// function get () {
//   return Order.find({}).exec()
// }

const get = () => Order.find({}).exec()

module.exports = {
  get
}