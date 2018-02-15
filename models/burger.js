const orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

// Import the ORM to create functions that will interact with the database.

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burger;
