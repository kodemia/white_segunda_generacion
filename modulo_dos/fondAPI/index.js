const server = require('./src/server')
const db = require('./src/lib/db')

server.listen(8080, () => {
  console.log('FondAPI running in port 8080')
  db.connect()
    .then(() => console.log('DB connected'))
    .catch(() => console.error('DB error while connect'))
})
