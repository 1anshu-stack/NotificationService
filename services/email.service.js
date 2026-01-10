import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendMail = (userId, userPass) => {
  // It to create a transport object, It is a resuable object that have default SMTP configuration.
  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  transport.sendMail({
    from: 'mba@support.com',
    to: 'bhupendrajogi661@gmail.com',
    subject: 'Test email for nodemailer',
    text: 'Hey, this is a test Email',
  });
};

export { sendMail };
