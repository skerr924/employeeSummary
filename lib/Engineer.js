// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(answers) {
    const name = answers.name; 
    const email = answers.email; 
    const id = answers.id; 
    super(name, email, id)
    this.gitHub = answers.gitHub; 

  }

  getGitHub(){ 
      return(this.gitHub); 
  }

}

module.exports = Engineer;
