// File that will setup the connection from Node to MySQL
// Requiring mysql
var mysql = require ('mysql');
// Creating the connection to the database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);	
}
	else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'hacktheplanet',
		database: 'todoagain_db'
	});
	}

connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Exporting the connection
module.exports = connection;