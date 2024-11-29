const names = require('./names');
const hobby = require('./hobbies');

function createUser() {
    const fullName = names("Angelo", "Almanza"); 
    const hobbies = hobby("calcio", "fotografia", "giardinaggio");

    return {
        fullName: `${fullName.firstName} ${fullName.lastName}`,
        hobbies: hobbies.hobbies 
    };
}

console.log(createUser());