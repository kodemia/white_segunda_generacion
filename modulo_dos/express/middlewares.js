const express = require('express')
const app = express()

const html= `
<!DOCTYPE HTML>
<h1> HELLO! </h1>
`

const logger = (req, resp, next) => {
  console.log('middleware global')
  next()
}

const auth = (req, resp, next) => {
  console.log('Ruta privada')
  next()
}

app.use(logger)

app.get('/', (req, resp) => {
  resp.send(html)
})

app.get('/publica', (req, resp) => {
  resp.send('ruta publica')
})

app.get('/privada', auth, (req, resp) => {
  resp.send('ruta privada')
})

app.listen(8080, () => {
  console.log('app listen in port 8080')
})