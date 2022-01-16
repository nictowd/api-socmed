var Session = require('../utils/session')
var Driver = require('../utils/driver')
var driver = Driver(process.env);
var express = require('express');
var session = Session(driver);
var router = express.Router();


router.post('/', (req, res, next) => {
  passport.authenticate('local',(e,u) => {à
    res.send({e,u})
  })(req, res, next)
})

router.post('/submit',(req,res) => {
  var create = session.create(
    session.driver
  )
  create.run(
    `match(u)<-[rel:profile]-(
    profile) where u.username=
    $username and u.password=$
    password return u,profile`
    ,new Object({...req.body})
  )
  .then(function({records}){
    res.send(records)
  })
  .catch(function(err){
    res.status(500).send(
      err.message
    )
  })
})

module.exports = router
