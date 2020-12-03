

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
          default : 'https://github.com/rakeru2006/html-node',
        },
        {
          type: 'input',
          name: 'githubPage',
          message: 'Enter your GitHub pages URL',
          default : 'https://rakeru2006.github.io/html-node/',
        },
        
       /* {
          type: 'password',
          message: 'What is your password?',
          name: 'secretText',
          mask: '?',
        },*/
        {
          type: 'input',
          message: 'What is the title of New Project?',
          name: 'newProject',
          default : 'Project New',
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
              message: 'Select License :',
              choices:[ 'MIT','Apache_2','GPLv3','ISC','BSD','GNU','None'] 
            },
            {
              name: 'usage',
              type: 'checkbox',
              message: 'Select Usage :',
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
            default: '```lorem ipsum``` ',
           
          },
          {
            type: 'input',
            message: 'Enter description of Installation Steps :',
            name: 'installationSteps',
            default : 'Step one ',
           
          },
          {
            name: 'contributing',
            type: 'rawlist',
            message: 'Enter type of Contributing :',
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
            message: 'Enter Tests: ',
            name: 'tests',
            default: 'Demo running',
          },
          {
            type: 'input',
            message: 'Enter email to answer Questions: ',
            name: 'question',
            default: 'rakeru2006@gmail.com',
          },
    ]);
  };
  

  const generateMarkdown = (answers) =>
  `
# :sparkles: Project Title  ${answers.newProject}  :sparkles:
================
## Author :bowtie:
***

Created by ${answers.name}

This project  run in this github repository [Github](${answers.github})
and can visualize in [Github pages](${answers.githubPage})


## Table of Contents :pushpin:
*** 
  - [Description](#description)
  - [License](#license)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions FAQs](#questions-faqs)

 -${answers.contents}


## Description  :bulb:
  ***
  General information about this project.

  ${answers.description}
  
## License :cop: :guardsman: :key:
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
  
  > Maybe you want to search more of this part.
  > This is how you do it.SPDX License List
  > The SPDX License List itself is a list of commonly found licenses and
  > exceptions used in free and open or collaborative software, data, hardware,
  > or documentation. The SPDX License List includes a standardized short identifier,
  > the full name, the license text, and a canonical
  > permanent URL for each license and exception.
  > [SPDX License List](https://spdx.org/licenses/)
    
    
## Usage :speech_balloon:  :hammer: :eyeglasses: 
  ***
We are going to create this code to show, help and ${answers.usage}

## Installation :feet:
***

${answers.installation}

Small description step by step that tells how to run and develop the aplication 

${answers.installationSteps}


## Tests :eyes: 
***

Demo aplication

${answers.tests}

![algo](https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg)

## Contributing  :man_with_gua_pi_mao:
***
You can participate with this project with one of the followin examples: 
 ${answers.contributing}


## Questions FAQs :question:
***

For questions contact ${answers.newProject}
Email${answers.question}



 
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
  
