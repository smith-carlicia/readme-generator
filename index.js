const fs = require ("fs");
const inquirer = require ("inquirer");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown.js") 
console.log("Hello world");

// inquirer.prompt([
const questions = [
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
        type: "list",
        message: "What is your README.md license?",
        name: "license",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "No License",
        ],
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
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "what is you LinkedIn URL?",
        name: "linkedinUrl",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress",
    },
];

function init() {
    inquirer.prompt(questions).then(data => {
        console.log(questions);
        return generateMarkdown(data);
    }).then(data => {
        writeToFile("sample-readme.md", data);
        }
    
    )};

// function to initialize program
init();

    // function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(__dirname, fileName), data);
    };

   