// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")
class Manager extends Employee{
    constructor (name, id, email, officenumber) {
        super(name, id , email);
        this.officenumber = officenumber;
    }
    getRole(){
        return("manager");
    }
    getOffice(){
        return this.officenumber;
    }
}

module.exports = Manager;