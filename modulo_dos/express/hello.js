const express = require('express')
const app = express()

const json= JSON.stringify({
  hola: 'root'
})

app.post('/', (req, resp) => {
  resp.send(json)
})

app.listen(8080, () => {
  console.log('app listen in port 8080')
})