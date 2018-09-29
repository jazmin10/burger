/* Burger App - Node, Express, and Handlebars 
Creating our ORM */

var connection = require("./connection.js");

// Helper function for SQL syntax: produces the appropiate length of ?s
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax: for column values passed 
// Ex: {sleepy: req.body.sleepy} ---> sleepy = req.body.sleepy
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// The ORM object to be used in burgers.controller.js
var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";

		// SQL READ query
		connection.query(queryString, function(readErr, readResults){
			if (readErr) throw err;
			cb(readResults);
		}); 

	},
	insertOne: function(table, columnNames, columnValues, cb){
		var queryString = "INSERT INTO " + table + "(";
		queryString += columnNames.toString() + ") ";
		queryString += "VALUES (" + printQuestionMarks(columnValues.length);
		queryString += ") ";

		// SQL CREATE query
		connection.query(queryString, columnValues, function(createErr, createResults){
			if (createErr) throw err;
			cb();
		});

	},

	// SQL UPDATE query
	updateOne: function(table, obj, condition, cb){
		var queryString = "UPDATE " + table + " SET ";
		queryString += objToSql(obj) + " WHERE " + condition;

		connection.query(queryString, function(updateErr, updateResults){
			if (updateErr) throw updateErr;
			cb();
		});

	}
}; 

module.exports = orm;
