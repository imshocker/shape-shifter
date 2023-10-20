function renderLicenseBadge(license) {
  let badge = ""

  if (license != "None") {
    badge = "![Badge Icon](https://shields.io/badge/license-" + license + "-blue)"
  }

  return badge
}

// Gives license link based on user input
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)'
  } else if (license === 'GPL') {
    return '[GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    // Return an empty string if no license is provided
    return ''
  }
}

// Populates the license section of the README
function renderLicenseSection(license) {
  let licenseSection = ""

  if (license != "None") {
    licenseSection += "## License " + renderLicenseBadge(license) + " \n"
    licenseSection += "\n"
    licenseSection += "Visit " + renderLicenseLink(license) + " for information about this license."
  }

  return licenseSection
}


function generateMarkdown(data) {
  return `# ${data.title}

  
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## How to Contribute

${data.contributing}

## Questions

For any questions, please contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}`

}

module.exports = generateMarkdown
