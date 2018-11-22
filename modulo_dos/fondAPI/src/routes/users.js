const express = require('express')

const router = express.Router()

const user = require('../usecases/users')

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    console.warn('email: ', email)
    await user.create({email, password})
    res.json({
      success: true,
      message: `User ${email} created`
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: `Could not create user ${req.body.email}`,
      errors: [ error ]
    })
  }
})

module.exports = router