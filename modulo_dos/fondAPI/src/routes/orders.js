const express = require('express')

const router = express.Router()

const orders = require('../usecases/orders')

router.get('/', async (req, res) => {
  const allOrders = await orders.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      orders: allOrders
    }
  })
})

router.post('/', async (req, res) => {
  try {
    const orderData = req.body
    const orderCreated = await orders.create(orderData)
    res.json({
      success: true,
      message: 'New order created',
      payload: {
        order: orderCreated
      }
    })
  } catch(error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Could not create order',
      error: [ error ]
    })
  }
})

module.exports = router