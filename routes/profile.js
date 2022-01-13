var Session = require('../utils/session')
var Driver = require('../utils/driver')
var driver = Driver(process.env);
var express = require('express');
var session = Session(driver);
var router = express.Router();

/* GET home page. */
router.get('/:name', async(req,res) => {
  try{
    var create  = session.create(
      session.driver
    )
    var users = await create.run(
      `match(user)<-[rl:profile
      ]-(profile) where profile
      .firstName = $name return 
      user,profile`, req.params
    )
    var row = users.records.map(
      function({_fields}){
        var [u] = _fields
        .filter((field) => {
          return field
          .labels=="user"
        })
        var [p] = _fields
        .filter((field) => {
          return field
          .labels=="profile"
        })
        return {
          user : u.properties,
          profile : p.properties
        }
      }
    )
    res.send(row)
  }
  catch({message}){
    res.send(message)
  }
});

module.exports = router;
