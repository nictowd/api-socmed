var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`${process.env.dbPassword}`)
});

module.exports = router;
