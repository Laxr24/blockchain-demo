var express = require('express');
var router = express.Router();
var async = require('async');

router.get('/', function(req, res, next) {
  // res.render('index');
  res.send("Welcome to BlockChain Demo")
});

router.get('/:page', function(req, res, next) {
    res.render(req.params.page, {page: req.params.page});
});

module.exports = router;
