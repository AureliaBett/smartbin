var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res) {
  res.send('hello there');
  //get database data
  //render to view
});

router.post('/trash', function(req, res){
  console.log(req.body);
});

module.exports = router;
