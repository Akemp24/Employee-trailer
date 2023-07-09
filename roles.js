// Import required files/packages
const connection = require('./connection');

// create a function to get all the Roles
function getRoles() {
    return connection.query('SELECT * FROM role')
}

// export the function
module.exports = {getRoles};