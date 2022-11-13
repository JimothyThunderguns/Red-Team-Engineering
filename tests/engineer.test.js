//Engineer constructor
const engineer = require("../lib/engineer");

//creating Engineer object 
test("", () => {
    const manager = new manager('Lex', 1213, 'TotalPackage@gmail.com', 323);

    expect(engieneer.officeNumber).toEqual(expect.any(Number))
});

//getRole getter
test('gets Employee role', () =>{
  const manager = new manager('Lex', 1213, 'TotalPackage@gmail.com', 323);

  expect(manager.getRole()).toEqual("Engineer");
});
  