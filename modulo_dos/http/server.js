const http = require('http')

const server = http.createServer((req, res) => {
  console.warn('req.url: ', req.url)
  res.writeHead(200, { 
    'Content-Type': 'application/json',
    'kodemia': 'white'
  })
  switch (req.url) {
    case '/':
      res.write(JSON.stringify({ Hola: 'root' }))
      break;
    case '/kodemia':
      res.write(JSON.stringify({ Hola: 'kodemia' }))
      break;
    default:
      res.write(JSON.stringify({ Hola: 'default' }))
      break;
  }
  res.end()
})

server.listen('8080', () => {
  console.log('SERVIDOR LEVANTADO EN PUERTO 8080')
})
