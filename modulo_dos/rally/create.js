const fs  = require('fs')

fs.writeFile('file.txt', 'HOLA KODERS!', (error) => {
  if(error) return console.error('ALGO PASO MAL')
  console.log('DONE!')
})