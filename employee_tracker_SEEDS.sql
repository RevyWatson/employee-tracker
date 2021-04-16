CREATE DATABASE employee_trackerDB;

CREATE TABLE department (
id INT PRIMARY KEY,
dept_name VARCHAR(30) -- to hold department name
);

CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR(30), -- to hold role title
salary DECIMAL, -- to hold role salary
department_id INT -- to hold reference to department role belongs to
);

CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30), -- to hold employee first name
last_name VARCHAR(30), -- to hold employee last name
role_id INT, -- to hold reference to role employee has
manager_id INT -- to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
);

INSERT INTO department (dept_name)
VALUES ("Management"), ("Field Work"), ("Research and Developement"), ("Contracter"),

INSERT INTO role (title, salary, department_id)
VALUES (), (), (), (),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thaddeus", "Venture", , ), ("Brock", "Samson", , ), ("Pete", "White", , ), ("William", "Whalen", , ), ("Byron", "Orpheus", , ), ("Jeferson", "Twilight", , ), ("Hunter", "Gathers", , ), ("Shore", "Leave", , ), ("Gary", "Fisher", , ), ("Molotov", "Cocktease"), ("Tara", "Quymn", , ), ("Le", "Tueur", , )