const Dish = require('../../models/dish').model

async function get() {
  const allDishes = await Dish.find({}).exec()
  return allDishes
}

async function create( dishData ) {
  const dish = new Dish(dishData)
  // TODO: implementar [ TAREA ]
  // https://mongoosejs.com/docs/models.html#constructing-documents
}

module.exports = {
  get
}