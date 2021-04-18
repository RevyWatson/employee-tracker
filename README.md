# Employee Tracker

## Description

This application was designed to help companies navigate, organize and manage their employee database from the command line terminal. It was built with [NodeJS](https://nodejs.org/en/) and utilizes the [Inquirer package](https://www.npmjs.com/package/inquirer) and the [MySQL](https://www.npmjs.com/package/mysql) package to connect to a MySQL database and perform queries. The user should be able to:

* Add departments, roles, employees.
* View departments, roles, employees.
* Update employee roles.

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)

![Screenshot (90)](https://user-images.githubusercontent.com/76264693/115132292-f48da380-9fcc-11eb-91a4-cf9a75c8d576.png)

## Installation

__Uploading the mySQL Database__
1. Fork and clone the repository.  
2. Locate and open "employee_tracker_SEEDS.sql" in mySQL WorkBench.
3. Run the file to create the database on your local machine.

__Opening the Application__
1. Open the command terminal on your machine.
2. Navigate through your file system to the location of the “employee-trackerAPP.js” file.
3. Within the same root folder create a .gitignore.txt file 
type the following within:
```
node_modules/.DS_Store
jspm_packages
package-lock.json
.env
```
4. Return to the root folder in the command line terminal and type "npm init" or "npm init -y" (if you wish to answer yes to all of the prompts) to create a package.json file.
5. Install the Inquirer package, mySQL package, console.table package, and a dotenv file by typing “npm i”.
6. Open the dotenv file and add your local instance name and password like so:
```
DB_USER="your local instance's name"
DB_PASSWORD="your mySQL Workbench password"
DB_NAME=employee_trackerDB
```
7. Return to the root folder in the command line terminal and type, “node employee-trackerAPP.js” to run the application.
9. Answer and follow the prompts to navigate through the options.

  ## Usage

  Click the link to view the [Employee Tracker](https://youtu.be/nlGdAkMBkUY) in action!
[insert images here]

  ## Questions

  Have questions or comments about this application?

  - Please feel free to email me at: garzoni.webdev@gmail.com
  - Or find me on GitHub at: [RevyWatson](https://github.com/RevyWatson)