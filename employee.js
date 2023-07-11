// Import required files/packages
const connection = require('./connection');

// create a function to get all the Employee
function getEmployee() {
    return connection.query('SELECT * FROM employee');
}

function addEmployee(firstName, lastName, jobTitle, department, salary, manager) {
    return connection.query('INSERT INTO employee (first_name, last_name, job_title, department, salary, managers) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, jobTitle, department, salary, manager]);
}

// export the function
module.exports = {getEmployee, addEmployee};