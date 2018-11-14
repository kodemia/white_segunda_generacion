const express = require('express')

const dish = require('./usecases/dishes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  orders.get()
  res.json({
    success: true,
    message: 'FondAPI running'
  })
})

app.get('/dishes', async (req, res) => {
  const dishes = await dish.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      dishes
    }
  })
})

app.post('/dishes', async (req, res) => {
  try {
    const dishData = req.body
    console.warn(' dishData: ', dishData)
    const newDish = await dish.create(dishData)
    res.json({
      success: true,
      message: 'New dish created',
      payload: { dish: newDish }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Dish could not be created',
      error: [
        error
      ]
    })
  }

})

app.delete('/dishes/:id', async (req, res) => {
  try {
    const { id } = req.params
    const dishDeleted = await dish.del(id)

    res.json({
      success: true,
      message: 'Dish deleted',
      payload: { dish: dishDeleted }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Dish could not be deleted',
      error: [
        error
      ]
    })
  }
})

module.exports = app