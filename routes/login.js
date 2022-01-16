var passport = require('passport')
var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
  passport.authenticate('local',(e,u) => {
    res.send({e,u})
  })(req, res, next)
})

module.exports = router
