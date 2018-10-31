function saludar(name = 'PepitoPromesa') {
  console.warn(`Hola ${name}.`)
}

function esperarYSaludar(name) {
  return new Promise((yei, ooops) => {
    if (!name) return ooops(new Error('No hay nombre para saludar!'))

    setTimeout(() => {
      saludar(name)
      yei(`${name} fue saludado.`)
    }, 5000)
  })
}

module.exports = esperarYSaludar