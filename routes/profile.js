var Session = require('../utils/session')
var Driver = require('../utils/driver')
var driver = driver(process.env);
var express = require('express');
var session = Session(driver);
var router = express.Router();

/* GET home page. */
router.get('/:_name', async(req,res) => {
  try{
    var create  = session.create(
      session.driver
    )
    var users = await create.run(
      `match(usr)<-[rel:profile
      ]-(profile) where profile
      .firstName=$_name, return 
      usr, profile`, req.params
    )
    res.send(users)
  }
  catch({message}){
    res.send(message)
  }
});

module.exports = router;
