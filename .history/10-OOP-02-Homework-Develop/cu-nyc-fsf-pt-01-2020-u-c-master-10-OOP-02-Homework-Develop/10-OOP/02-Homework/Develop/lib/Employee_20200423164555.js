// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
     getName(){
     return this.name 
     }
     getID(){
        return this.ID 
        }
        getemail(){
            return this.email 
            }
getName(){
return this.name 
}
getRole(){
    return ("Employee") 
    }
}

module.exports = Employee;