var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res) {
  //get database data
	res.render('home');
});

router.post('/trash', function(req, res){
  
});

module.exports = router;
