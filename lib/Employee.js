// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, email, id) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!email) {
        throw new Error("You are missing the email.");
      }
      if (!id) {
        throw new Error("You are missing the id.");
      }
      this.name = name;
      this.email = email;
      this.id = id;
      this.role = "Employee"; 
    }

    getRole() {
       console.log(this.role); 
    }

    getId(){ 
        console.log(this.id)
    }

    getName(){ 
        console.log(this.name)
    }

    getEmail(){ 
        console.log(this.email)
    }
}

module.exports = Employee;
