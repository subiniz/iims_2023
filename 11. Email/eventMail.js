const event = require('events');
const nodemailer = require('nodemailer');

let eventEmitter = new event.EventEmitter();

eventEmitter.on('sendMail', () => {
    console.log('Finally this section is called.');
    // console.log('An Email Has Been Sent');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yourgmail@gmail.com',
          pass: 'appPassword'
        }
    });

    const mailOptions = {
        from: 'yourgmail@gmail.com',
        to: 'someother@gmail.com',
        subject: 'How to use nodemailer',
        text: 'This is the text of the email'
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent successfully: ' + info.response);
        }
    });
});

function signUp() {
    console.log('This gets called second.');
    eventEmitter.emit('sendMail');
}

console.log('This gets called first.');
signUp();