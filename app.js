//page generation link
const htmlMarkdown = require('./src/htmlMarkdown')

//team profile scripts
const manager = require('.lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const fs = require("fs");
const inquirer = require("inquirer");    

//tammates array
const teammates = [];


function createFile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    } else {
  
      fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
      console.log("File created in the output folder");
    }