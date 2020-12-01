
///
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },


        {
          //  GIVEN a command-line application that accepts user input

          type: 'input',
          message: 'What is your user name?',
          name: 'username',
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
      //  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

        {
          type: 'input',
          message: 'What is the title of new project?',
          name: 'newProject',
        },
        {
            type: 'input',
            message: 'Enter Description :',
            name: 'description',
          },
          {
            type: 'input',
            message: 'Enter Table of Contents:',
            name: 'contents',
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
            name: 'license',
            type: 'rawlist',
            message: 'Select License',
            choices:[ 'MIT','Apache_2','GPLv3','ISC','BSD',]
            
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
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Reedme</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  
  // Bonus using async/await and try/catch
  const init = async () => {
    console.log('hi');
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync('index.html', html);
  
      console.log('Successfully wrote to index.html');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  