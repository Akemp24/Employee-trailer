// Import required files/packages
const connection = require('./connection');

// create a function to get all the departments
function getDepartments() {
    return connection.query('SELECT * FROM department')
}

// function to add a department
function addDepartment(departmentName) {
    return connection.query('INSERT INTO department (department_name) VALUES (?)', [departmentName]);
}

// export the function
module.exports = {getDepartments, addDepartment};