var express = require('express')
var app = express()

app.set('view engine', 'pug')
 

//SQL PART
var connection = require('./env2').connection

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

//Routing
app.get('/', function (req, res) {
  connection.query(`select * from user where username = 'gyo'`, function (error, results) {
    res.render('index.pug', {title: 'Alumnis', message: `hey ${results[0].username} Bienvenue dans la page d'accueil alumnis Simplon`});
    console.log(results[0])
  });
  

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
 





app.listen(3000, function(){
    console.log('hey')
})