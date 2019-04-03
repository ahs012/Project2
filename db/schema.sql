-- Drops the user if it exists currently --
-- DROP DATABASE IF EXISTS users_db;
-- Creates the "users" database --
-- CREATE DATABASE users_db;
USE users_db;
CREATE TABLE users(
id INT PRIMARY KEY,
type VARCHAR(100),
name VARCHAR(100),
user_name VARCHAR(100),
location VARCHAR(100),
email VARCHAR(100)
);

-- CREATE TABLE art_table
(
 art_id INT PRIMARY KEY AUTO_INCREMENT,
 users_id INT,
 FOREIGN KEY (users_id) REFERENCES users(id),
 title VARCHAR(100),
 art_medium VARCHAR(100),
 art_path VARCHAR(100),
 released DATE 
 );