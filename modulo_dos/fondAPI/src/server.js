const express = require('express')

const dish = require('./usecases/dishes')

const app = express()

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
  // TODO: implementar [ TAREA ]
})

module.exports = app