const fs = require ("fs");
const inquirer = require ("inquirer");

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
    inquirer.prompt(questions).then(function (name){
        console.log(name);
        fs.writeFile("sample-readme.md", name, (err) => 
            err ? console.log(err) : console.log("Working")
        );
    });
}



    // function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process).cwd(), fileName,data)
    };

// function to initialize program
    init();

// ]).then((response) => {
//     console.log(response);
//     generateMarkdown (response);
// })








