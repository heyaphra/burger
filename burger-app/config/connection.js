// Node Dependency
const mysql = require('mysql');
let connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
  	port     : 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'WO4EE0;}hSJPZaW', // Add your password
    database : 'burgers_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;