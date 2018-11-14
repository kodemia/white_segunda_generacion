const Order = require('../../models/order').model

const dish = require('../dishes')

// function get () {
//   return Order.find({}).exec()
// }

const get = () => Order.find({}).exec()

const create = async (orderData) => {

  const { dishes = [] } = orderData

  const dishPromises = dishes.map((dishId) => {
    return dish.getById(dishId)
  })

  const dishPromisesResult = await Promise.all(dishPromises)

  const invalidDishes = dishPromisesResult.reduce((reducer, current, index) => {
    if ( current == null ) return [  ...reducer, dishes[index] ]
    return reducer
  }, [])
  
  if(invalidDishes.length > 0 ) throw new Error(`Invalid Dishes: ${ invalidDishes.join(',') } `)

  const newOrder = new Order(orderData)
  return newOrder.save()
}

module.exports = {
  get,
  create
}