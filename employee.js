// Import required files/packages
const connection = require('./connection');

// create a function to get all the Employee
function getEmployee() {
    return connection.query('SELECT * FROM employee');
}

// export the function
module.exports = {getEmployee};