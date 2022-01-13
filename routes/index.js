var Session = require('../utils/session')
var driver = require('../utils/driver')
var dbDriver = driver(process.env);
var express = require('express');
var sessions = Session(dbDriver);
var router = express.Router();

/* GET home page. */
router.get('/:id', async(req,res) => {
  try{
    var session = sessions.create(
      sessions.driver
    )
    var result = await session.run(
     `match( user: user{id: $id})
      return user,{...req.params}
    )
    res.send(result)
  }
  catch({message}){
    res.send(message)
  }
});

module.exports = router;
