const fs = require('fs')

fs.readdir('./newDir', (error, files) => {
  if (error) return console.error('Error: ', error)
  console.warn('files: ', files)
})