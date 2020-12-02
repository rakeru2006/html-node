
///
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
      //  GIVEN a command-line application that accepts user input
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          default: 'Raquel Ceron',
        },

        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Repository',
          default : 'https://github.com/rakeru2006',
        },
        {
          type: 'input',
          name: 'githubPage',
          message: 'Enter your GitHub page',
          default : 'https://rakeru2006.github.io/HW2/',
        },
        
        {
          type: 'password',
          message: 'What is your password?',
          name: 'secretText',
          mask: '?',
        },
        {
          type: 'input',
          message: 'What is the title of New Project?',
          name: 'newProject',
        },
            {
              name: 'contents',
              type: 'checkbox',
              message: 'Select to Enter Table of Contents:',
              choices:[

                '- [Description](#contents)',
                '- [License](#License)',
                '- [Usage](#Usage)',
                '- [Installation](#Installation)',
                '- [Contributing](#Contributing)',
                '- [Tests](#Tests)',
                '- [Questions FAQs](#Questions)',
                ]
            },
            {
              name: 'description',
              type: 'input',
              message: 'Enter Description :',
              default: 'This aplication help to make work live easy',
            },
            {
              name: 'license',
              type: 'rawlist',
              message: 'Select License',
              choices:[ 'MIT','Apache_2','GPLv3','ISC','BSD','GNU','None'] 
            },
            {
              name: 'usage',
              type: 'checkbox',
              message: 'Select Usage',
              choices:[
              'Innovate',
              'Learn and experiment',
              'Contribute',
              'Work',
              'Be informed',
              'View Code ',
              'To collaborate',]
            },
          {
            type: 'input',
            message: 'Enter description of Installation Requirements :',
            name: 'installation',
            default :'```lorem ipsum``` ',
           
          },
          {
            type: 'input',
            message: 'Enter description of Installation Steps ',
            name: 'installationSteps',
            default :'```lorem ipsum``` ',
           
          },
          {
            name: 'contributing',
            type: 'rawlist',
            message: 'Enter Contributing',
            choices:[ 
            'Report a bug',
            'Fix errors',
            'Suggest a new feature',
            'add features',
            'Help improve the project',
            'Other',
            ]
          },
          {
            type: 'input',
            message: 'Enter Tests',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'Enter Question Was this page helpful?',
            name: 'question',
          },
    ]);
  };
  
        /*We add a newline character to the command line argument
      .then(answers =>{
          console.log('Answer:  ',answers)
       
      })
     
   

  

      // We add a newline character to the command line argument
      fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
      );
      
   */
  const generateMarkdown = (answers) =>
  `
  [![Build Status](https://dev.azure.com/vscode/VSCode/_apis/build/status/VS%20Code?branchName=master)](https://aka.ms/vscode-builds)
[![Feature Requests](https://img.shields.io/github/issues/microsoft/vscode/feature-request.svg)](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/microsoft/vscode/bug.svg)](https://github.com/microsoft/vscode/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-yellow.svg)](https://gitter.im/Microsoft/vscode)

  Command-line application to generate README.md
  # Title Project ${answers.newProject} 
================

Create by ${answers.name}

This project  run in this github repository [Github](${answers.github})
and can visualisate in [Github pages](${answers.githubPage})


## Table of Contents
   
  - [Description](#description)
  - [License](#license)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions FAQs](#questions-faqs)

 -${answers.contents}


## Description 
  ***
  General information about this project.

  ${answers.description}
  
## License
  ***
  
  
  This proyect going to used the license:
  ~~~
  ${answers.license}
  ~~~
  You can read more about this in
  A list of technologies used within the project:
  
  | License Identifier| FSF Free? | OSI Approved? |
  |:--------------|:-------------:|--------------:|
  | MIT| Y | Y|
  | Apache_2.0 | Y | Y|
  | ISC | Y | Y |
  | BSD |  | Y |
  
  * [MIT](https://spdx.org/licenses/MIT.html)
  * [Apache_2.0 ](https://spdx.org/licenses/Apache-2.0.html)
  * [ISC](https://spdx.org/licenses/ISC.html)
  * [BSD](https://spdx.org/licenses/BSD-1-Clause.html)
  
  > Maybe you want to seacrh more of this part.
  > This is how you do it.SPDX License List
  > The SPDX License List itself is a list of commonly found licenses and
  > exceptions used in free and open or collaborative software, data, hardware,
  > or documentation. The SPDX License List includes a standardized short identifier,
  > the full name, the license text, and a canonical
  > permanent URL for each license and exception.
  > [SPDX License List](https://spdx.org/licenses/)
    
    
## Usage
  ***
We are going to create this code to show, help and ${answers.usage}

## Installation
***
<p align="center">
  <img alt="VS Code in action" src="https://user-images.githubusercontent.com/1487073/58344409-70473b80-7e0a-11e9-8570-b2efc6f8fa44.png">
</p>

![algo](https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg)


${answers.installation}

Small description step by step that tells how to run and develop the aplication 
${answers.installationSteps}

## Tests
***

Demo aplication
${answers.tests}


## Contributing
***
You can participate with this project with one of the followin examples: 
 ${answers.contributing}


## Questions FAQs
***
${answers.question}



 
    `;
  
  // Bonus using async/await and try/catch
  const init = async () => {
    console.log('Please answer the following questions:');
    try {
      const answers = await promptUser();
  
      const markdown = generateMarkdown(answers);

  
      await writeFileAsync('README.md', markdown);
  
      console.log('Successfully wrote to README.md');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  
