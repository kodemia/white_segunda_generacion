const jwt = require('../lib/jwt')

module.exports = (authRoles = []) => async (req, res, next) => {
  if ('authorization' in req.headers) {
    try {
      let validJwt = await jwt.verify(ctx.request.headers.authorization)
      if (validJwt) {
        return next()
      }
    } catch (error) {
      console.error(error)
      ctx.throw(401, 'Invalid token')
    }
  } else {
    ctx.throw(401, 'Unauthorized')
  }
}
