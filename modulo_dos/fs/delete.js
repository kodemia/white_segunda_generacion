const fs = require('fs')

fs.unlink('./created.txt', error => {
  if (error) return console.error('Error: ', error)
  console.log('Archivo borrado')
})

fs.unlinkSync('./created.txt')
