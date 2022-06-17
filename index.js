const inquirer = require('inquirer');
const fs = require('fs') //file system
const generateMarkdown = require('./utils/generateMarkdown')
var location = "./utils/README.md"
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is your github username",
        name: "github"
    },
    {
        type: "input",
        message: "How do you contribute to this project?",
        name: "contribution"
    },
    {
        type: "list",
        choices: [
            "MIT",
            "Apache",
            "Mozilla",
            "None"
        ],
        message: "What is the license for this project?",
        name: "license"
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "Any Questions for this project?",
        name: "questions"
    },
];

// TODO: Create a function to write README file
// function writeFile(whereyouwanttowriteit, whatyouwanttowriteinthefile, (err) =>
// err ? console.error(err) : console.log('Success!')
// )

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers)=>{
        fs.writeFile(location, generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log('Success!'))
    })
}

// Function call to initialize app
init();