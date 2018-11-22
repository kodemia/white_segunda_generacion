const express = require('express')

const app = express()

const dishesRoutes = require('./routes/dishes')
const ordersRoutes = require('./routes/orders')
const authRoutes = require('./routes/auth')
const auth = require('./middlewares/auth')

app.use(express.json())

app.use('/dishes', dishesRoutes)
app.use('/orders', ordersRoutes)
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  orders.get()
  res.json({
    success: true,
    message: 'FondAPI running'
  })
})

module.exports = app