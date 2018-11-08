const express = require('express')

const db = require('./db')

const app = express()

app.get('/dishes', (req, res) => {
  console.log('>> HOLA DISHES')
  res.json({
    success: true,
    message: 'Hola dishes'
  })
})

app.listen(8080, () => {
  console.log('i am up koders in port 8080')
  db.connect()
    .then((x) => { console.log('db conectada! ', x) })
    .catch(error => console.error('db error al conectar'))
})