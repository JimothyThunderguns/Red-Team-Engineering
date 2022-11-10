//intern constructor
const intern = require("../lib/intern");

//creating intern object 
test("Can set office number via constructor argument", () => {
    const intern = new intern('Owen', 6274, 'BlueBlazer@gmail.com', 'UC');

   e;
});

//getSchool getter
test('gets employee school', () => {
    const intern = new intern('Owen', 6274, 'BlueBlazer@gmail.com', 'UC');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    
});


//getRole getter
test('gets Employee role', () =>{
    const intern = new intern('Owen', 6274, 'BlueBlazer@gmail.com', 'UC');

  expect(intern.getRole()).toEqual("Intern");
});
  