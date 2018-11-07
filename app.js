var express = require('express')
var app = express()

app.set('view engine', 'pug')
 

//Routing
app.get('/', function (req, res) {
  res.render('index.pug', {title: 'Hey', message:'my pug'})
})

app.get('Profil', function(req,res){
  res.render('profil.pug')
})
 


//SQL PART
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