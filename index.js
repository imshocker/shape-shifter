
const inquirer = require('inquirer')

const licenseChoices = ['MIT', 'Apache-2.0', 'GPL-3.0', 'None']

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: licenseChoices,
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Once the user has answered the questions, you can use the answers to generate your README content and write it to a file.
        const readmeContent = generateMarkdown(answers)
        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init()
