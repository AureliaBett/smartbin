var express = require('express');
var router = express.Router();
var db = require('../models/db');
var mongoose = require('mongoose');

router.get('/', function(req, res) {
  res.render('home');

  db.getCanData(1).then(function(data) {
    db.parseCanData(data, db.parseCanRecord);
  });
});

router.get('/trashdata', function(req, res){
  console.log(db.getCanData(1));

  db.getCanData(1).then(function(data){
    res.send({
      data: data
    });
  });
});

router.post('/trash', function(req, res){
  db.logCanData(req.body.id, req.body.weight, req.body.timestamp);
  console.log(req.body.id)
});

module.exports = router;
