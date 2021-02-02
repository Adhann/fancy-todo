const jwt = require('jsonwebtoken')

const authentication = function (req, res, next) {
  try {
    const token = req.headers.token
    const decoded = jwt.verify(token, process.env.SECRET)
    
    req.decoded = decoded
    next()
  } catch (err) {
    res.status(401).json({
      error: 'Invalid token'
    })
  }
}

module.exports = authentication 