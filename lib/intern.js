//code to create and define the Engineer class.

//call the employee class 
const employee = require("./employee")

//creating a child class to employee
class intern extends employee {
    constructor(name, id, email, school) {
//Using a super to call the employee elements
        super(name, id, email);
        //office number this
        this.school = office;
        //title this
        this.role = "Intern"

    }
//GitHub getter
    getOffice() {
        return this.office;
    }
}
module.exports = manager;