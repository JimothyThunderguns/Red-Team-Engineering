//Engineer constructor
const engineer = require("../lib/engineer");

//creating manager object 
test("Can set office number via constructor argument", () => {
    const manager = new manager('Lex', 1213, 'TotalPackage@gmail.com', 323);

    expect(manager.officeNumber).toEqual(expect.any(Number))
});

//getRole getter
test('gets Employee role', () =>{
  const manager = new manager('Lex', 1213, 'TotalPackage@gmail.com', 323);

  expect(manager.getRole()).toEqual("Engineer");
});
  