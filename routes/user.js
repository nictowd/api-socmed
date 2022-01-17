var Session = require('../utils/session')
var driver = require('../utils/driver')
var dbDriver = driver(process.env);
var express = require('express');
var sessions = Session(dbDriver);
var router = express.Router();

/* GET home page. */
router.get('/:id', async(req,res) => {
  res.send('takbo')
});

module.exports = router;
