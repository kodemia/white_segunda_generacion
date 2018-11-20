const jwt = require('jsonwebtoken')

const hash = process.env.JWT_KEY || 'superSecretKey'
const ttl = process.env.JWT_TTL || '8h'

module.exports = {
  create (data, secret = hash) {
    return new Promise((resolve, reject) => {
      jwt.sign(data, secret, { expiresIn: ttl }, function (error, token) {
        if (error) return reject(error)
        resolve(token)
      })
    })
  },

  verify (token, secret = hash) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, function (error, decoded) {
        if (error) return reject(error)
        resolve(decoded)
      })
    })
  }
}
