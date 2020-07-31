// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(answers) {
        const name = answers.name; 
        const email = answers.email; 
        const id = answers.id; 
        super(name, email, id)
        this.school = answers.school; 
        console.log("New Intern created: " + this.name)


    }

    getSchool (){ 
        return(this.school); 
    }

}

module.exports = Intern;
