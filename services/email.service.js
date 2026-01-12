import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendMail = (userId, userPass, mailData) => {
  // It to create a transport object, It is a resuable object that have default SMTP configuration.
  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  transport.sendMail({
    from: mailData.from,
    to: mailData.to,
    subject: mailData.subject,
    text: mailData.text,
  });
};

export { sendMail };
