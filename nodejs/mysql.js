var mysql      = require("mysql2");
var connection = mysql.createConnection({
  host     : '13.124.219.199',
  user     : 'root',
  password : 'sugar1492!!',
  database : 'TEST'
});
 
connection.connect();
 
connection.query('SELECT * from topic', function (error, results, fields) {
  if (error){
    console.log(error);
}
    console.log(results);
});
connection.end();