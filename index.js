const inquirer = require('inquirer');
const fs = require9'fs');
const path = require9'path');
const readMeGen  = require('/.utils/readMeGen');

inquire
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Please list your table of contents.',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please describe instructions for installation of your project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please describe how to use your project.',
        },
        {
            type: 'input',
            name: 'License',
            message: 'Please enter license information for this project.',
        },
        {
            type: 'Contributing',
            name: 'Contributors',
            message: 'Please list contributors to this project.',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Please describe testing for your project.',
        }
        {
            type: 'input',
            name: 'Questions',
            message: 'Please provide a link to your Github profile',
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Please provide your email address.',
        },
    ])

    function init(){
        inquirer.prompt(questions).then((inquirerResponse)) => {
            console.log("Complete!:);
            writetoFile("Readme.md, readmeGen({...inquireResponse}")
        }
    }