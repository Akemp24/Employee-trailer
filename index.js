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
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Thank you and Goodbye');
                process.exit(0);
            default:
                console.log('Not a Choice, please select again');
                displayMainMenu();
        }
    });
}

// Functions to view all the departments, roles, and employees
function viewAllDepartments(){};

function viewAllRoles(){};

function viewAllEmployees(){};

// Function to add departments, roles, and employees
function addDepartment(){};

function addRole(){};

function addEmployee(){};

// Function to update employee roles
function updateEmployeeRole(){};

// code to start the application
mainMenu();