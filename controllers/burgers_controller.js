/* ASSIGNMENT #14: Burger App - Node, Express, and Handlebars 
Setting up our routing */

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// Sets up routes for READ, CREATE, and PUT

router.get("/", function(readReq, readRes){
	burger.selectAll(function(data){
		var hbsObject = { burgers: data};

		readRes.render("index", hbsObject);
	});
});

router.post("/", function(createReq, createRes){
	burger.insertOne(["burger_name"], [createReq.body.newBurger],
		function(){
			createRes.redirect("/");
	});
});

router.put("/:id", function(updateReq, updateRes){
	var condition = "id = " + updateReq.params.id;
	
	burger.updateOne({devoured: updateReq.body.devoured}, condition,
		function(){
			updateRes.redirect("/");
	});
});

module.exports = router;
