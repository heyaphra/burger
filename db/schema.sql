CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(25),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.