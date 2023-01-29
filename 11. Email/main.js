const nodemailer = require('nodemailer');

/** Creating a transporter object that will be used to send the email.
  * You DO NOT enter your actual password,
  * you need to generate app passwords from gmail > settings > security.
*/
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