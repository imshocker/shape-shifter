const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')


const licenseChoices = ['MIT', 'Apache', 'GPL', 'None']

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
        message: 'How To Contribute:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Contact:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Contact:'
    },
]

// Function to write new README to result folder
function writeToFile(fileName, data) {
    const filePath = path.join('result', fileName)

    // Use the 'fs' module to write the data to the file at the specified path.
    try {
      fs.writeFileSync(filePath, data)
      console.log(`Successfully wrote ${fileName} to the 'result' folder.`)
    } catch (error) {
      console.error(`Error writing ${fileName} to the 'result' folder: ${error}`)
    }
}

// Once the user has answered the questions, you can use the answers to generate your README content and write it to a file.
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers)
        writeToFile('README.md', readmeContent)
    })
}

// Function call to initialize app
init()
