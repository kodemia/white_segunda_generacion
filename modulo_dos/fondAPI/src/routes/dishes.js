const express = require('express')

const router = express.Router()

const dish = require('../usecases/dishes')
const auth = require('../middlewares/auth')

router.get('/', auth, async (req, res) => {
  const dishes = await dish.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      dishes
    }
  })
})

router.post('/', auth, async (req, res) => {
  try {
    console.warn('user: ', req.user)
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

router.delete('/:id', async (req, res) => {
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

module.exports = router