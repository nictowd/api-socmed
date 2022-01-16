var passport = require('passport')
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('ok')
})

module.exports = router
