const fs = require('fs')

// asincrono
fs.readFile('./file.txt', 'utf8', (error, data) => {
  if (error) return console.error('>> error: ', error)
  console.log('>> FILE CONTENT', data)
})
// sincrono
const txtContent = fs.readFileSync('./file.txt', 'utf8')
console.log('txt content: ', txtContent)