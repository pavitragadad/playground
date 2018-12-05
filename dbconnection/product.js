var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE pavitra", function (err, result){
  if (err) throw err;
  console.log("Database created");
  var sql = "CREATE TABLE orders (productno INT(100), productname VARCHAR(255),emailid VARCHAR(255),location VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  var sql = "INSERT INTO orders (productno , productname ,emailid ,location) VALUES (4, 'ipod','ghjkr@gmail.com','mumbai')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    var sql = "UPDATE orders SET location = 'maharastra' WHERE productno = 2";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");

});
  });
});
  });
});
