// SQL CONNECTION

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'toor'
    });
     



exports.connection = connection