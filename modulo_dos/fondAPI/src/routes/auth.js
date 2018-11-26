const express = require('express')

const jwt = require('../lib/jwt')

const router = express.Router()

const users = require('../usecases/users')

// const secretWord = 'k0D3wi4'

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const token = await users.login(email, password)
    res.json({
      success: true,
      message: 'logged in successfuly',
      payload: {
        token
      }
    })
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'Cannot login',
      errors: [ error ]
    })
  }
})

module.exports = router