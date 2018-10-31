
const express = require('express')
const app = express()

// app.use(express.static('images'))

app.get('/', (req, resp) => {
  resp.send('hola')
})

app.use('/static', express.static('images'))

app.listen(8080, () => {
  console.log('app listen in port 8080')
})