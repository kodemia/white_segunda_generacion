const express = require('express')
const router = express.Router()

let data = require('../data.json')

router.get('/', (req, resp) => {
  resp.json({
    success: true,
    message: 'DONE!',
    data: data.koders
  })
})

module.exports = router