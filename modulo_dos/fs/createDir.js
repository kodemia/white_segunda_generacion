const fs = require('fs')

fs.mkdir('./newDir', error => {
  if (error) return console.error('Error: ', error)
  console.warn('Directorio creado sin problema')
})