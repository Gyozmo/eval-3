var express = require('express')
var app = express()

app.set('view engine', 'pug')
 

//Routing
app.get('/', function (req, res) {
  res.render('index.pug', {title: 'Hey', message:'my pug'})
})

app.get('/profile', function(req,res){
  res.render('profil.pug')
})

app.get('/contactes', function(req,res){
  res.render('contactes.pug')
})

app.get('/mateprofile', function(req,res){
  res.render('mateprofile.pug')
})
 


//SQL PART
var connection = require('./env2').connection

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