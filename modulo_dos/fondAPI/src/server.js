const express = require('express')
const cors = require('cors')

const app = express()

const dishesRoutes = require('./routes/dishes')
const ordersRoutes = require('./routes/orders')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')

app.use(cors())
app.use(express.json())

app.use('/dishes', dishesRoutes)
app.use('/orders', ordersRoutes)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'FondAPI running'
  })
})

module.exports = app