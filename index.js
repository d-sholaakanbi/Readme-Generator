const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title of your Project.",
      },
      {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of this project.",
      },
      {
        type: "input",
        name: "installation",
        message: "Provide the process in which to install the project.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "State the languages or technologies associated with this project.",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "contributors",
        message: "List any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
      },
      {
        type: "input",
        name: "link",
        message: "Provide a URL where a user can access your deployed application."
      },
      
      {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
      },
      {
        type: "input",
        name: "features",
        message: "List some cool features about this project here.",
      },
      
      {
        type: "input",
        name: "creator",
        message: "Provide your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
      
      
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating a Professional README.md File...");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
      });
}

// function call to initialize program
init();
