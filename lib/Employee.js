// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

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
    }
}