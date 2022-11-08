//code to create and define the Engineer class.

//call the employee class 
const employee = require("./employee")

//creating a child class to employee
class manager extends employee {
    constructor(name, id, email, office) {
//Using a super to call the employee elements
        super(name, id, email);
        //office number this
        this.office = office;
        //title this
        this.role = "Manager"

    }
//GitHub getter
    getOffice() {
        return this.office;
    }
}
module.exports = manager;