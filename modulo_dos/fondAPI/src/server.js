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
  // TODO: implementar [ TAREA ]
  const dishData= req.body
  console.warn('dishData:',dishData)
  const newdish=await dish.create(dishData) //Usarlo en el server
  res.json({
    success:true,
    message:'New Dish created',
    payload:{dish:newdish}
  })
})

module.exports = app