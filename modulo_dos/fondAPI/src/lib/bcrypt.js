const bcrypt = require('bcrypt')

const saltRounds = 10

module.exports = {
  create (password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if(err) return reject(err)
        resolve(hash)
      });
    })
  },
  verify (password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err, same) => {
        if(err) return reject(err)
        resolve(same)
      })
    })
  }
}