var Session = require('../utils/session')
var driver = require('../utils/driver')
var dbDriver = driver(process.env);
var express = require('express');
var session = Session(dbDriver);
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var session = session.create(
    session.driver
  )
  res.send(session)
});

module.exports = router;
