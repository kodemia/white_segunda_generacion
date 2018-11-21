const express = require('express')

const jwt = require('../lib/jwt')

const router = express.Router()

// const secretWord = 'k0D3wi4'

router.post('/login', async (req, res) => {
  try {
    const token = await jwt.create({user: 'admin'})
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