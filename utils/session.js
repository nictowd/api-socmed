function create(driver){
  return driver.session({
    database : 'neo4j' 
  })
}

module.exports = (driver) => {
  return { driver,create }
}
