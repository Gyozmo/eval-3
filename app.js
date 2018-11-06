var express = require('express')
var app = express()

app.set('view engine', 'pug')
 
app.get('/', function (req, res) {
  res.render('index.pug', {title: 'Hey', message:'my pug'})
})
 
var connection = require('./env.js').connection

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


app.listen(3000, function(){
    console.log('hey')
})