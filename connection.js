// Import required packages
const mysql = require('mysql2');
require('dotenv').config();

// create a mysql connection
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
      },
      console.log(`Connected to the employees_db database.`)
);

// export the mysql connection
module.exports = connection;