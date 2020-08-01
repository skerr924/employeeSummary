// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role="Employee") {
    //   if (!name) {
    //     throw new Error("You are missing the name.");
    //   }
    //   if (!email) {
    //     throw new Error("You are missing the email.");
    //   }
    //   if (!id) {
    //     throw new Error("You are missing the id.");
    //   }
      this.name = name;
      this.email = email;
      this.id = id;
      this.role = role; 
      console.log("New Employee created: " + this.name)
    }

    getRole() {
       return (this.role); 
    }

    getId(){ 
        return(this.id)
    }

    getName(){ 
        return(this.name)
    }

    getEmail(){ 
        return(this.email)
    }
}

module.exports = Employee;
