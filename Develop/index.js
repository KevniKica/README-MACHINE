// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
      {
        type: 'input', message: "What's the title of the project?", name: 'title',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "Describe your project.", name: 'describe',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "What is the installation of your project?", name: 'install',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "Describe the usage of your project.", name: 'usage',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "Describe the contribution guidelines of the project.", name: 'cont',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "How can you test your project?", name: 'test',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "What is your Github username?:", name: 'github',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'input', message: "What is your Email?:", name: 'email',
        validate: (value)=> { if(value){return true} else {return 'Please enter a value.'}},
      },
      {
        type: 'list', message: "Which license did you use?", name: 'lisc', choices: ['MIT', 'ISC', 'Apache', 'GPL', 'N/A']
      }
    ]
 
  ).then(({
    title,
    desc,
    install,
    usage,
    cont,
    test,
    git,
    email,
    lisc,
  })=>{
  
    //function to determine link to license badge
  function generateLiscLink(){
    let liscLink = ''
        if(lisc === 'MIT'){liscLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; return liscLink}
        else if(lisc === 'GPL'){liscLink = '[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; return liscLink}
        else if(lisc === 'Apache'){liscLink = '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; return liscLink}
        else if(lisc === 'ISC'){liscLink = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'; return liscLink}
        else{liscLink = 'Unlicensed'; return liscLink}
  }
    //readme template to be filled with answers
  const template = 
  `# ${title}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)
  ## License
  ${generateLiscLink(lisc)}
  ## Description
  ${desc}
  ## Installation
  ${install}
  ## Usage
  ${usage}
  ## Contribution
  ${cont}
  ## Testing
  ${test}
  ## Questions
  Contact me at:
  * My Github: https://github.com/${git}
  * Email: ${email}`;
  //call for function to create the file
  createNewFile(title, template);
  }
  )
  //function to create file
  function createNewFile(fileName,data){
    fs.writeFile(`./readme's/${fileName.toLowerCase().split(' ').join('')}.md`,data, (err)=>{
      if(err){
        console.log(err)
      }
      console.log('Your ReadME has been generated!')
    })
  }