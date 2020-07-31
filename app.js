const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


promptEmployee(); 

// inquirer to gathers information about the development team members
// creates objects for each team member 

function promptEmployee() {
    return inquirer.prompt([
        {
            type: "list", 
            name: "role", 
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input", 
            name: "name", 
            message: "Enter the employee's name."
        }, 
        { 
            type: "input", 
            name: "email", 
            message: "Enter the employee's email address."
        }, 
        { 
            type: "input", 
            name: "id", 
            message: "Enter the employee's ID."
        }, 
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter the Engineer's gitHub username.",
            when: (answers) => answers.role === 'Engineer'
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's office phone number.",
            when: (answers) => answers.role === 'Manager'
        }, 
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school.",
            when: (answers) => answers.role === 'Intern'
        }, 
        {
            type: "confirm", 
            name: "addMore", 
            message: "Would you like to add another employee?"
        }
    ])
    .then(answers => {     
        console.log(answers); 
        if (answers.role === "Engineer"){ 
            new Engineer (answers); 
        } else if (answers.role === "Intern"){ 
            new Intern (answers); 
        } else if (answers.role === "Manager"){ 
            new Manager (answers)
        }


        if (answers.addMore === true){ 
            promptEmployee(); 
        } else { 
            return; 
        }
    })
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
