/* ASSIGNMENT #14: Burger App - Node, Express, and Handlebars 
Schema for our database */

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(200) NOT NULL,
	devoured BOOLEAN DEFAULT false NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);
