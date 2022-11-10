//Code that creates the Employee constructor
class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//getting the name
    getName() {
        return this.name;
    }
// getting the ID
    getId() {
        return this.id;
    }
// getting the Email
    getEmail() {
        return this.email;
    }
// gets the role
    getRole(){
        return 'Employee';
    }
}
module.exports = employee;