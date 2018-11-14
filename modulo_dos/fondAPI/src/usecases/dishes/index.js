const Dish = require('../../models/dish').model

async function get() {
  const allDishes = await Dish.find({}).exec()
  return allDishes
}

async function create( dishData ) {
  const existingDishes = await Dish.find({ ...dishData }).exec()

  const dishExists = existingDishes.length > 0

  if (dishExists) throw new Error('Dish already exists')

  const dish = new Dish(dishData)
  const dishCreated = await dish.save()
  return dishCreated
}

function del (id) {
  return Dish.findByIdAndDelete(id).exec()
}

function getById (id) {
  return Dish.findById(id).exec()
}

module.exports = {
  get,
  create,
  del,
  getById
}