// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "what is the description?",
  },
  {
    type: "input",
    name: "instalation",
    message: "what is your instalation command?",
  },
  {
    type: "input",
    name: "usage",
    message: "what is your usage?",
  },
  {
    type: "list",
    name: "license",
    message: "what is your License?",
    choices: ["Apache 2.0", "Boost Software", "BSD 3-Clause"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who is contributing?",
  },
  {
    type: "input",
    name: "tests",
    message: "What is your test instructions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    
const readmeData = `
  # ${answers.title}

  ##Description
  
  ##${answers.description}

  ## Table of Contents

  **[Installation](#Installation)**
  **[Usage](#Usage)**
  **[License](#License)**
  **[Contributing](#Contributing)**
  **[Tests](#Tests)**
  **[Questions](#Questions)**

  ## Installation

  \'\'\'${answers.installation}\'\'\'

  ## Usage
  
  * ${answers.usage}

  ## License

  * ${answers.license}

  ## Contributing

  * ${answers.contributing}

  ## Tests

  * ${answers.tests}

      `;

    writeToFile("README.md", readmeData);
  });
}

// Function call to initialize app
init();
