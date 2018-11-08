const fs = require('fs')

const dirName = 'dir'

try {
  const files = fs.readdirSync(dirName)

  files.forEach(file => {
    fs.unlinkSync(`./${dirName}/${file}`)
  })

  fs.rmdirSync(dirName)
} catch (error) {
  console.error('No se pudo borrar: ', error)
}