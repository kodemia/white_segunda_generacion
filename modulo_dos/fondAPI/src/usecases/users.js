const User = require('../models/user').model

const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

async function create({ email, password }){
  console.warn('create')
  const hash = await bcrypt.create(password)
  console.warn('hash: ', hash)
  const user = new User({ email, password: hash })
  return user.save()
}

async function validatePassword (email, password) {
  const user = await User.findOne({ email }).exec()
  return bcrypt.verify(password, user.password)
}

async function login (email, password) {
  const user = await User.findOne({ email }).exec()
  console.warn('user: ', user)
  console.warn('user email:', user.email)
  if (!user) throw new Error('User do not exists')
  const isValidPassword = await validatePassword(user.email, password)

  if (!isValidPassword) throw new Error('Invalid password')
  return jwt.create({ id: user._id })
}

module.exports = {
  create,
  validatePassword,
  login
}