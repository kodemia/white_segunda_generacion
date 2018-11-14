const express = require('express')

const app = express()

const dishesRoutes = require('./routes/dishes')

app.use(express.json())

app.use('/dishes', dishesRoutes)

app.get('/', (req, res) => {
  orders.get()
  res.json({
    success: true,
    message: 'FondAPI running'
  })
})

module.exports = app