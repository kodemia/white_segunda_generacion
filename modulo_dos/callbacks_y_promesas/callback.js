function saludar (name = 'PepitoCallback') {
  console.warn(`Hola ${name}.`)
}

function esperarYSaludar (name, callback) {
  setTimeout(() => {
    const error = !name 
      ? new Error('no hay nombre para saludar') 
      : null

    const result = name 
      ? `${name} fue saludado.`
      : null
    
    saludar(name)
    if (callback) return callback(error, result)
  }, 5000)
}

module.exports = esperarYSaludar
