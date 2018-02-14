// In the orm.js file, create the methods that will execute the necessary MySQL 
//commands in the controllers. These are the methods you will need to use in order 
//to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()

// Import MySQL connection.
const connection = require("../config/connection.js");


let orm = {
  // The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
  // ["?", "?", "?"].toString() => "?,?,?";
  printQuestionMarks: function(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  },
  // Helper function to convert object key/value pairs to SQL syntax
  objToSql: function(obj) {
    let arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (let key in obj) {
      let value = obj[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(obj, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  },
  
  selectAll: function(tableInput, cb){
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },//end selectAll 
  
  insertOne: function(table, cols, vals, cb){
      let queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += this.printQuestionMarks(vals.length);
      queryString += ") ";
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    
  },//end insertOne
  updateOne: function(table, objColVals, condition, cb){
      let queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += this.objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    
  }//end updateOne
}



// Export the orm object for the model (burger.js).
module.exports = orm;
