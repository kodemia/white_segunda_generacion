const saludar = require('./promesas')

// async / await 
async function main () {
  const result = await saludar('Charles')
  const result2 = await saludar(result)

  console.warn('>> result: ', result)
  console.warn('>> result: ', result2)
}

main()



// Callback
// saludar('Charles', (error, data) => {
//   if (error) return console.error('Error: ', error)
//   console.log('DONE : ', data)
// })

// Promises
// saludar()
//   .then(response => {
//     console.warn('>> then: ', response)
//   })
//   .catch(error => {
//     console.error('>> ERROR: ', error )
//   })