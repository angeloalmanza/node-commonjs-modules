// Libreria chalk
import chalk from 'chalk';

// COMMON JS
// const names = require('./names.js');
// const hobby = require('./hobbies.js');

// ES6
import names from './names.js';
import hobby from './hobbies.js';

function createUser() {
    const fullName = names("Angelo", "Almanza"); 
    const hobbies = hobby("calcio", "fotografia", "giardinaggio");

    return {
        fullName: `${fullName.firstName} ${fullName.lastName}`,
        hobbies: hobbies.hobbies 
    };
}

console.log(chalk.blue.bgRed(JSON.stringify(createUser())));