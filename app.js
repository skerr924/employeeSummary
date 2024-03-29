const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const allEmployees = []; 

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
        if (answers.role === "Engineer"){ 
            let temp = new Engineer (answers.name, answers.id, answers.email, answers.gitHub); 
            allEmployees.push(temp); 
        } else if (answers.role === "Intern"){ 
            let temp = new Intern (answers.name, answers.id, answers.email, answers.school); 
            allEmployees.push(temp); 
        } else if (answers.role === "Manager"){ 
            let temp = new Manager (answers.name, answers.id, answers.email, answers.officeNumber); 
            allEmployees.push(temp); 
        }

        if (answers.addMore === true){ 
            promptEmployee(); 
        } else { 
            createTempHTML(allEmployees); 
        }
    })
};

function createTempHTML(allEmployees){ 
    const tempHTML = render(allEmployees);  
    fs.writeFile(path.join(__dirname, "output", "team.html"), tempHTML, function (err) {
        if (err) throw err;
        console.log("successfully wrote to team.html");
    }) 
    
}

promptEmployee(); 
