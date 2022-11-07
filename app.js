//Required contsants
const inquirer = require("inquirer");
const fs = require("fs");
const engineer 
const intern = require("")
const manager = 

const teammates = [];


function createFile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    } else {
  
      fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
      console.log("File created in the output folder");
    }