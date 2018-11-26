const jwt = require('../lib/jwt')

module.exports = async (req, res, next) => {
  req.state = {
    ...req.state,
    user: 'charles'
  }
  if ('authorization' in req.headers) {
    try {
      let validJwt = await jwt.verify(req.headers.authorization)

      if (validJwt) return next()
      throw new Error('Invalid token')
    } catch (error) {
      console.error(error)
      res.status(401)
      res.json({
        success: false,
        message: 'Invalid token'
      })
    }
  } else {
    res.status(401)
    res.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}
