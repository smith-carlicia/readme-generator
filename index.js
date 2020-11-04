const fs = require ("fs");
const inquirer = require ("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js") 
console.log("Hello world");

inquirer.prompt([
    {
        type: "input",
        message: "What is your README.md title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your ReadME.md description?",
        name: "description",
    },
    {
        type: "input",
        message: "What is your README.md table of contents?",
        name: "tableOfContents",
    },
    {
        type: "input",
        message: "What is your README.md installation?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is your README.md usage",
        name: "usage",
    },
    {
        type: "input",
        message: "What is your README.md usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "What is your README.md site link?",
        name: "siteLink",
    },
    {
        type: "input",
        message: "What is your README.md site GitHub repo link?",
        name: "repoLink",
    },
    {
        type: "input",
        message: "What is your README.md credits?",
        name: "credits",
    },
    {
        type: "input",
        message: "What is your README.md license?",
        name: "license",
    },
    {
        type: "input",
        message: "What is your README.md badges?",
        name: "badges",
    },
    {
        type: "input",
        message: "What is your README.md contributing?",
        name:"contributing",
    },
    {
        type: "input",
        message: "What is your README.md tests?",
        name: "tests",
    },
]).then((response) => {
    console.log(response);
})




// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
