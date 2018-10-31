const fs = require('fs')

const obj = {
  saludo: 'Saludos a todos',
  despedida: 'Adios a todos'
}

const content = JSON.stringify(obj)

fs.writeFile('./created.json', content, error => {
  if (error)return console.error('Error: ', error)
  console.log('Archivo creado')
})

fs.appendFile('./created.json', content + '\n', error => {
  if (error) return console.error('Error: ', error)
  console.warn('Contenido agregado al archivo')
})
