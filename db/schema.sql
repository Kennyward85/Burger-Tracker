DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE bugers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int non NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);