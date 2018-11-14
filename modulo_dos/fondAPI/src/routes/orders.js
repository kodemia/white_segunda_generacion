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

module.exports = router