
const fs = require('fs')
const express = require('express')
const app = express()

const koderRoutes = require('./routes/koders')

let data = require('./data.json')

app.use(express.json())

app.use('/koders', koderRoutes)

app.get('/mentors', (req, resp) => {
  console.log('query: ', req.query)
  resp.json({
    success: true,
    message: 'DONE!',
    data: data.mentors
  })
})

app.post('/mentors', (req, resp) => {
  const { name, age } = req.body
  const newMentor = { name, age }

  data.mentors = [ ...data.mentors, newMentor ]

  fs.writeFileSync('data.json', JSON.stringify(data), 'utf8')
  data = fs.readFileSync('./data.json')

  resp.json({
    success: true,
    message: 'Mentor created',
  })
})

app.get('/mentors/:name', (req, resp) => {
  const { name } = req.params
  const foundMentor = data.mentors.find(mentor => {
    const mentorName = mentor.name.toLowerCase()
    return (mentorName === name.toLowerCase())
  })
  if (foundMentor) {
    console.log('cumplido')
    return resp.json({
      success: true,
      mentor: foundMentor
    })
  }
  resp.status(404)
  .json({
    success: false,
    message: 'Mentor not found'
  })
})

app.listen(8080, () => {
  console.warn('App ready on port 8080')
})