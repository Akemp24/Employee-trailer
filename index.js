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
            message:'What would you like to do?',
            name:'menuChoices',
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
function viewAllDepartments(){
    department.getDepartments().then((department) => {
        // Formatting data for display
        console.table(department);
        mainMenu();
    })
    .catch((error) => {
        console.error('Error retrieving departments:', error);
        mainMenu();
    });
};

function viewAllRoles(){
    role.getRoles().then((role) => {
        console.table(role);
        mainMenu();
    })
    .catch((error) => {
        console.error('Error retrieving roles:', error);
        mainMenu();
    })
};

function viewAllEmployees(){
    employee.getRoles().then((employee) => {
        console.table(employee);
        mainMenu();
    })
    .catch((error) => {
        console.error('Error retrieving employee:', error);
        mainMenu();
    })
};

// Function to add departments, roles, and employees
function addDepartment(){
    // use inquirer prompt in order to retrieve data to push into the table
    inquirer
        .prompt([
            {
                type:'input',
                message:'What is the department name?',
                name:'deptName'
            },
        ])
        .then((answers) => {
            department.addDepartment(answers.deptName)
            .then(() => {
                console.log('Department added successfully');
                mainMenu();
            })
            .catch((error) => {
                console.error('Error adding Department:', error);
                mainMenu();
            });
        });
};


function addRole(){
    // Use same outline for addDepartment and reconfigure to meet the role criteria
    inquirer
        .prompt([
            {
                type:'input',
                message:'What is the role you want to add?',
                name:'roleTitle'
            },
            {
                type:'input',
                message:'What is the department name?',
                name:'roleDept'
            },
            {
                type:'number',
                message:'What is the salary?',
                name:'roleSalary'
            },
        ])
        .then((answers) => {
            role.addRole(answers.roleTitle, answers.roleDept, answers.roleSalary)
            .then(() => {
                console.log('Role added successfully');
                mainMenu();
            })
            .catch((error) => {
                console.error('Error adding role:', error);
                mainMenu();
            });
        });
};

function addEmployee(){
    inquirer
        .prompt([
            {
                type:'input',
                message:'What is the employee first name?',
                name:'firstName'
            },
            {
                type:'input'
            }
        ])
        .then((answers) => {
            employee.addEmployee(answers.firstName)
            .then(() => {
                console.log('Employee added successfully');
                mainMenu();
            })
            .catch((error) => {
                console.error('Error adding employee:', error);
                mainMenu();
            });
        });
};

// Function to update employee roles
function updateEmployeeRole(){};

// code to start the application
mainMenu();