var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(queryResults){
			cb(queryResults);
		});
	}, 
	insertOne: function(columnNames, columnValues, cb){
		orm.insertOne("burgers", columnNames, columnValues, function(){
			cb();
		});
	},
	updateOne: function(obj, condition, cb){
		orm.updateOne("burgers", obj, condition, function(){
			cb();
		});
	}
}; 

module.exports = burger;
