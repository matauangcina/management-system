CREATE DATABASE management;

USE management;

CREATE TABLE item (
	item_id CHAR(8) NOT NULL,
    item_name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    created_by VARCHAR(50) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(item_id)
);

CREATE TABLE users (
	user_id CHAR(8) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    phone_num VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    password CHAR(32) NOT NULL,
    PRIMARY KEY(user_id)
);