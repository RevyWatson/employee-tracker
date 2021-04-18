DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
dept_name VARCHAR(30)
);

CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30), 
role_id INT NOT NULL, 
manager_id INT,
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department (dept_name)
VALUES ("Management"), ("Field Work"), ("Research and Developement"), ("Contracter");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 100000, 1), ("Field Agent", 85000, 2), ("Super Scientist", 45000, 3), ("Mercenary", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thaddeus", "Venture", 3, null),  ("Hunter", "Gathers", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Brock", "Samson", 2, 3), ("Pete", "White", 3, 1), ("Molotov", "Cocktease", 4, 3);