const event = require('events');
let eventEmitter = new event.EventEmitter();

eventEmitter.on('sendMail', () => {
    console.log('An Email Has Been Sent');
});

function signUp() {
    // Some codes that are related to sign up function
    eventEmitter.emit('sendMail');
}

signUp();