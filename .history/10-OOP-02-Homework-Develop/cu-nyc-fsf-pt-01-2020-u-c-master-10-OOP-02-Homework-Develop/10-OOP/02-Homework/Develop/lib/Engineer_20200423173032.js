// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")
class Engineer extends Employee{
    constructor (name, id, email, gitHub) {
        super(name, id , email);
        this.officeNumber = officeNumber;
        this.gitHub = gitHub;
    }
    getRole(){
        return("Manager");
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;