var {driver,auth} = require('neo4j-driver')

module.exports = ({URI,USER,PASSWORD}) => {
  return driver(URI,auth.basic(
    USER,PASSWORD
  ))
}
