
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
          default: 'Raquel Ceron ',
        },
        
        {
          type: 'password',
          message: 'What is your password?',
          name: 'secretText',
          mask: '?',
        },
        {
          type: 'password',
          message: 'Re-enter password to confirm:',
          name: 'confirm',
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

                '[Description](#contents)',
                '[License](#License)',
               '[Installation](#Installation)',
                '[Usage](#Usage)',
                '[Contributing](#Contributing)',
                '[Tests](#Tests)',
                '[Questions FAQs](#Questions)',
                ]
            },
            {
              type: 'input',
              message: 'Enter Description :',
              name: 'description',
            },
            {
              name: 'license',
              type: 'rawlist',
              message: 'Select License',
              choices:[ 'MIT','Apache_2','GPLv3','ISC','BSD',]
              
            },
          {
            type: 'input',
            message: 'Enter description of Installation instructions ',
            name: 'installation',
          },
          {
            name: 'usage',
            type: 'checkbox',
            message: 'Select Usage',
            choices:['Aprender y experimentar',
                    'Contribuir',
                    'Trabajo en equipo',
                    'Estar informado(a)',
                    'Visor de código',
                    'Registro de incidencias',]
          },
          
          {
            type: 'input',
            message: 'Enter Contributing',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'Enter Tests',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'Enter Question',
            name: 'question',
          },
         
          {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
          },
          {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
          },
          {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },
          {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
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
  const generateHTML = (answers) =>
  `
  Command-line application to generate README.md
================

Create by ${answers.name}


# Project name
# ${answers.newProject}


  ## Table of Contents
  ***

  ${answers.contents}


  ## Description 
  ***
  General information about this project.

  ${answers.description}
  
  ## License
  ***

  ${answers.license} 

 ${answers.github}</li>
    `;
  
  // Bonus using async/await and try/catch
  const init = async () => {
    console.log('hi');
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);

  
      await writeFileAsync('README.md', html);
  
      console.log('Successfully wrote to README.md');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  
