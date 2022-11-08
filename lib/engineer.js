//code to create and define the Engineer class.

//call the employee class 
const employee = require("./employee")

//creating a child class to employee
class engineer extends employee {
    constructor(name, id, email, github) {
//Using a super to call the employee elements
        super(name, id, email);
        //github this
        this.github = github;
        //title this
        this.title = "role"

    }
//GitHub getter
    getGitHub() {
        return this.github;
    }
}
module.exports = Engineer;