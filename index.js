// Import required files/packages
const inquirer = require('inquirer');
const department = require('./department');
const role = require('./roles');
const employee = require('./employee');

// Function for the main menu
function mainMenu() {
    inquirer.prompt([
        {
            type:'list',
            message:What would you like to do?,
            name:menuChoices,
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update Employee Role',
                'Exit'
            ]
        },
    ])
    .then((answer) => {
        switch (answers.menuChoice) {
            
        }
    })
}
// Functions to view all the departments, roles, and employees

// Function to add departments, roles, and employees

// Function to update employee roles

// code to start the application