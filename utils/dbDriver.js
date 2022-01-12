var {URI,USER,PASSWORD} = process.env
var {driver,auth}  = require('neo4j-driver')

var _driver = driver(URI,auth.basic(
    USER,PASSWORD
  )
)

module.exports = _driver
