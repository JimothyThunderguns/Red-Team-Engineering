//Calling the employee constructor
const { default: test } = require('node:test')
const employee = require('../lib/employee')

//create an employee object
test('creates an emloyee object', () => {
    const employee = new employee ('Hawk','59', 'roadwarriorhawk@gmail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
});

//getName getter
test('gets employee name', () => {
    const employee = new employee ('Hawk','59', 'roadwarriorhawk@gmail.com');
    
    expect(employee.getName().toEqual(expect.any(String));
});

//getId getter
test('gets employee name', () => {
    const employee = new employee ('Hawk','59', 'roadwarriorhawk@gmail.com');
    
    expect(employee.getId().toEqual(expect.any(Number));
});

//getEmail getter
//geName getter
test('gets employee name', () => {
    const employee = new employee ('Hawk','59', 'roadwarriorhawk@gmail.com');
    
    expect(employee.getEmail().toEqual(expect.any(String));
});

//getRole getter
test('Grabs the Employee Role', () => {
    const employee = new employee ('Hawk','59', 'roadwarriorhawk@gmail.com');
    
    expect(employee.getRole().toEqual("Employee");
});