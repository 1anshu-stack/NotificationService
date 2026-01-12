import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendMail = (userId, userPass, mailData) => {
  // It to create a transport object, It is a resuable object that have default SMTP configuration.
  return nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: userId,
      pass: userPass
    },
  });
};

export { sendMail };
