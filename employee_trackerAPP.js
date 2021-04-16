const inquirer = require("inquirer");
const cTable = require('console.table');


const mainMenu = () => {
    console.log("Welcome to Employee Tracker!");
    inquirer.prompt({
        name: "options",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View by department",
            "View by role",
            "View all employees",
            "Update employee role",
            "Delete department",
            "Delete role",
            "Remove employee",
            "Exit"
        ],
    })
        .then(answers => {
            switch (choices.options) {
                case "Add department":
                    addDeptartment();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "View by department":
                    viewDeptartment();
                    break;

                case "View by role":
                    viewRole();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "Update employee role":
                    updateRole();
                    break;

                case "Delete department":
                    deleteDepartment();
                    break;

                case "Delete role":
                    deleteRole();
                    break;

                case "Remove employee":
                    removeEmployee();
                    break;

                case "Exit":
                    connection.end();
                    break;

                default:
                    console.log(`${answers.options} is an invalid entry. Please try again!`);
                    mainMenu();
                    break;
            }
        })
}

const addDeptartment = () => {
    mainMenu();
}

const addRole = () => {
    mainMenu();
}

const addEmployee = () => {
    //promts for new employee info (prompt for each column)
    //.then to return to menu
    mainMenu();
}

const viewDeptartment = () => {
    inquirer.prompt({
        name: "view-dept",
        type: "list",
        message: "Which department would you like to view?",
        choices: ["Management", "Field Work", "Research and Developement", "Contractors",],
    })
        .then //query by user's chosen departemnt
        mainMenu();
}

const viewRole = () => {
    inquirer.prompt({
        name: "view-role",
        type: "list",
        message: "Which role would you like to view?",
        choices: ["Manager", "Senior Field Agent", "Junior Field Agent", "Mercenary", "Super Scientist",],

    })
        .then //query by user's chosen role
        mainMenu();
}

const viewEmployees = () => {
    //straight to all employees query and display
    mainMenu();
}

const updateRole = () => {
    inquirer.prompt({
        name: "view-dept",
        type: "list",
        message: "Which role would you like to update?",
        choices: ["Manager", "Senior Field Agent", "Junior Field Agent", "Mercenary", "Super Scientist",],

    })
}

const deleteDepartment = () => {
    inquirer.prompt({
        name: "view-dept",
        type: "list",
        message: "Which department would you like to DELETE?",
        choices: ["Management", "Field Work", "Research and Developement", "Contractors",],

    })
        .then //query by user's chosen dept
        mainMenu();
}

const deleteRole = () => {
    inquirer.prompt({
        name: "delete-dept",
        type: "list",
        message: "Which role would you like to DELETE?",
        choices: ["Manager", "Senior Field Agent", "Junior Field Agent", "Mercenary", "Super Scientist",],

    })
        .then //query by user's chosen role
        mainMenu();
}

const removeEmployee = () => {
    //query all employee's as list options to be selected to be deleted
    mainMenu();
}




//TO-DO LIST
// Build a command-line application that at a minimum allows the user to:
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles

// Bonus points if you're able to:
// Update employee managers
// View employees by manager
// Delete departments, roles, and employees
// View the total utilized budget of a department -- ie the combined 
//salaries of all employees in that department