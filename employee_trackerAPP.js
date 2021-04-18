const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");
const dotenv = require("dotenv");
require("dotenv").config();

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
);

console.log("Welcome to Employee Tracker!");

const mainMenu = () => {
    inquirer.prompt({
        name: "options",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View all by departments",
            "View all by roles",
            "View all by employees",
            "Update employee role",
            // "Delete department",
            // "Delete role",
            // "Remove employee",
            "Exit"
        ],
    })
        .then(answers => {
            switch (answers.options) {
                case "Add department":
                    addDeptartment();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "View all by departments":
                    viewDeptartment();
                    break;

                case "View all by roles":
                    viewRole();
                    break;

                case "View all by employees":
                    viewEmployees();
                    break;

                case "Update employee role":
                    updateRole();
                    break;

                // case "Delete department":
                //     deleteDepartment();
                //     break;

                // case "Delete role":
                //     deleteRole();
                //     break;

                // case "Remove employee":
                //     removeEmployee();
                //     break;

                case "Exit":
                    connection.end();
                    console.log("Thank you! See you next time!");
                    break;

                default:
                    console.log(`${answers.options} is an invalid entry. Please try again!`);
                    mainMenu();
                    break;
            }
        })
}

const addDeptartment = () => {
    inquirer.prompt([
        {
            name: "dept_name",
            type: "input",
            message: "What is the name of the department that you would like to add?",
        },
    ],
    )
        .then((answers) => {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    dept_name: answers.dept_name,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your department was added successfully!');
                    mainMenu();
                }
            );
        });
};

const addRole = () => {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the role title you wish to add?",
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary?",
        },
        {
            name: "department_id",
            type: "list",
            message: "What department do they work in?",
            choices: [1, 2, 3, 4, 5, 6],
        },
    ],
    )
        .then((answers) => {
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answers.title,
                    salary: answers.salary,
                    department_id: answers.department_id,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your role was added successfully!');
                    mainMenu();
                }
            );
        });

}

const addEmployee = () => {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "role_id",
            type: "list",
            message: "What is the employee's role id?",
            choices: [1, 2, 3, 4, 5, 6],
        },
        {
            name: "manager_id",
            type: "list",
            message: "What is the manager's id?",
            choices: [1, 2, 3, 4, 5, 6],
        },
    ],
    )
        .then((answers) => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answers.first_name,
                    last_name: answers.last_name,
                    role_id: answers.role_id,
                    manager_id: answers.manager_id || null,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your empolyee was added successfully!');
                    mainMenu();
                }
            );
        });
};

const viewDeptartment = () => {
    connection.query("SELECT department.*, role.title, employee.first_name, employee.last_name, role.salary FROM employee INNER JOIN role ON role_id = role.id INNER JOIN department ON department.id = role.department_id", (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    })
}

const viewRole = () => {
    connection.query("SELECT role.id, role.title, department.dept_name, employee.first_name, employee.last_name, role.salary FROM role INNER JOIN department ON department.id = role.department_id INNER JOIN employee ON role_id = role.id ORDER BY role.id;", (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    })
}

const viewEmployees = () => {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.dept_name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON department.id = role.department_id ORDER BY employee.id;", (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    })
}

const updateRole = () => {
    inquirer.prompt([
        {
            name: "select_role",
            type: "list",
            message: "Which role would you like to update?",
            choices: ["la", "ba", "fa"], //select from full name of all employees
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary?",
        },
        {
            name: "department_id",
            type: "list",
            message: "What is the department id?",
            choices: [1, 2, 3, 4],
        },
    ],
    )
        .then((answers) => {
            const query = connection.query(
                'UPDATE role SET ? WHERE ?',
                [
                    {
                        title: (answers.select_role),
                    },
                    {
                        salary: (answers.salary),
                    },
                    {
                        department_id: (answers.department_id),
                    },
                ],
                (err, res) => {
                    if (err) throw err;
                    console.log("Your role has been updated!");
                    mainMenu();
                }
            );
        })

}

// const deleteDepartment = () => {
//     inquirer.prompt({
//         name: "view-dept",
//         type: "list",
//         message: "Which department would you like to DELETE?",
//         choices: ["Management", "Field Work", "Research and Developement", "Contractors",],

//     })
//         .then //query by user's chosen dept
//     mainMenu();
// }

// const deleteRole = () => {
//     inquirer.prompt(
//         {
//             name: "delete-dept",
//             type: "list",
//             message: "Which role would you like to DELETE?",
//             choices: ["Manager", "Senior Field Agent", "Junior Field Agent", "Mercenary", "Super Scientist"],
//         })
//         .then(answers.delete - dept)
//     connection.query(
//         'DELETE FROM products WHERE ?',
//         mainMenu();


// const removeEmployee = () => {
//     inquirer.prompt(
//         {
//             name: "remove-employee",
//             type: "list",
//             message: "Which employee would you like to REMOVE?",
//             choices: [],

//             mainMenu();
//         })
// }

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    mainMenu();
});