// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(answers) {
        const name = answers.name; 
        const email = answers.email; 
        const id = answers.id; 
        super(name, email, id)
        this.officeNumber = answers.officeNumber; 
        console.log("New Manager created: " + this.name)

    }


}

module.exports = Manager;

