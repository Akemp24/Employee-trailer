// Import required files/packages
const connection = require('./connection');

// create a function to get all the departments
function getDepartments() {
    return connection.query('SELECT * FROM department')
}

// export the function
module.exports = {getDepartments};