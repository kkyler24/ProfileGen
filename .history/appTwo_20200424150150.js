const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");



inquirer.prompt([
        {
        type: "input",
        name: "Employee",
        message:"What is the role?"
        },
        {
        type: "input",
         name: "name",
        message:"What is the Engineers name?"
    },
    {
        type: "input",
        name: "id",
        message:"What is the Engineers Id?"
    },
    {
        type: "input",
        name: "GitHub Username",
        message:"What is the Engineers GitHub username?"
    },
    {
        type: "input",
        name: "GitHut acount",
        message:"What is the Engineer's GitHib account?"
    },
    {
        type: "input",
        name: "Email",
        message:"What is the Engineer's Email?"
    }
    ]);


inquirer.prompt([
    {
    type: "input",
    name: "Employee",
    message:"What is the role?"
    },
    {
        type: "input",
        name: "id",
        message:"What is the Intern's Id?"
    },
    {
        type: "input",
         name: "name",
        message:"What is the Interns name?"
    },
    {
        type: "input",
        name: "school",
        message:"What school does the Intern attend?"
    },
    {
    type: "input",
    name: "email",
    message:"What is the Manager's Email?"
    }
    ]).then(function(answers){
        console.log(answers)
        constructor ()
    });

