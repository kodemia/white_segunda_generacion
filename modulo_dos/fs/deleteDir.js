
const fs = require('fs')

const dirContent = fs.readdirSync('./folder-to-delete/')
const isEmptyDir = !dirContent[0]

if (!isEmptyDir){
  console.log('Voy a borrar archivos')
  dirContent.forEach(file => fs.unlinkSync(`./folder-to-delete/${file}`))
} else {
  console.log('no voy a borrar archivos')
}
fs.rmdirSync('./folder-to-delete/')
