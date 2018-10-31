const fs = require('fs')

fs.copyFile('./file.txt', './copied.txt', error => {
  if (error) return console.error('Error: ', error)
  console.log('copiado sin problema')
})