const express = require('express');
var app = express();

const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./controllers/routes')
const port = process.env.PORT || 8080;

//Set view engine and port
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

//middleware
app.use('/', router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
