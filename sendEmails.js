const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config();

// Log environment variables to verify they are loaded correctly
console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

// Load email list from a file or database
const emailList = fs.readFileSync('emailList.txt', 'utf-8').split('\n').filter(email => email);

console.log('Loaded email list:', emailList);

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Verify the transport configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter configuration error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Define email options
const mailOptions = {
  from: `"Your Name" <${process.env.GMAIL_USER}>`,
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: '<b>Hello world?</b>'
};

// Function to send emails
const sendEmails = async () => {
  for (const email of emailList) {
    try {
      console.log('Sending email to:', email);
      let info = await transporter.sendMail({ ...mailOptions, to: email });
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email to %s:', email, error.message);
      console.error('Full error:', error);
    }
  }
};

sendEmails();
