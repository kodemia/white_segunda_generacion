const fs = require('fs')

const csv = fs.readFileSync('./mentorsList.csv', 'utf8')
console.warn('csv: ', csv)

const lines = csv.split('\n')
console.warn('lines: ', lines)

const cleanLines = lines.map(line => line.replace('\r', '')).slice(1)
console.warn('cleanLines: ', cleanLines)

const mentors = cleanLines.reduce((list, line) => {
  console.warn('line: ', line)
  const [ name, course ] = line.split(',')
  const mentor = { name, course }
  return [ ...list, mentor ]
}, [])
console.warn('mentors: ', mentors)

const mentorsList = { mentors }
console.warn('mentors: ', mentorsList)

fs.writeFileSync('mentorsListCreated.json', JSON.stringify(mentorsList))
