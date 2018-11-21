const jwt = require('../lib/jwt')

module.exports = async (req, res, next) => {
  if ('authorization' in req.headers) {
    try {
      let validJwt = await jwt.verify(req.headers.authorization)
      if (validJwt) {
        return next()
      }
    } catch (error) {
      console.error(error)
      // error
      throw new Error('Invalid JWT')
    }
  } else {
    // error
    throw new Error('Unauthorized')
  }
}
