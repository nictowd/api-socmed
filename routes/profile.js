var Session = require('../utils/session')
var Driver = require('../utils/driver')
var driver = driver(process.env);
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
      `match(user)<-[r:profile]
      -(profile{firstName:$name
      }) return _user,_profile`
      ,Object({ ...req.params})
    )
    res.send(users)
  }
  catch({message}){
    res.send(message)
  }
});

module.exports = router;
