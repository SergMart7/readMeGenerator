//  PACKAGES NEEDED

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// QUESTIONS TO BE ASKED

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this be used properly',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How will contributions work',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'none'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'please provide the directory towards your screenshot',
    },
];

// FUNCTION TO WRITE A README

function generateREADME(answers) {
    return generateMarkdown(answers);
}

// TODO: FUNCTION TO INNITIALIZE APP

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
}

// CALLS IINITIALIZE FUNCTION

init();
