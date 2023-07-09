DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL,
    job_title VARCHAR (30),
    department_name VARCHAR(30),
    salary INT NOT NULL
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    job_title VARCHAR (30),
    department VARCHAR(30),
    salary INT NOT NULL,
    managers VARCHAR (30)
);