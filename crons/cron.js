import cron from 'node-cron';
import Ticket from '../models/ticketNotification.model.js';
import { sendMail } from '../services/email.service.js';
import { now } from 'mongoose';


const mailerCron = () => {
  const mailer = sendMail(process.env.EMAIL, process.env.EMAIL_PASS);
  cron.schedule('*/2 * * * *', async () => {
    console.log("executing cron time");
    const notificationsToBeSent = await Ticket.find({
      status: 'PENDING',
    });

    notificationsToBeSent.forEach((notification) => {
      const mailData = {
        from: 'bhupendrajogi661@gmail.com',
        to: notification.recepientEmails,
        subject: notification.subject,
        text: notification.content,
      };

      mailer.sendMail(mailData, async (err, data) => {
        if (err) {
          console.log("send mail error", err);
        } else {
          console.log("data to send", data);
          const savedNotification = await Ticket.findById({
            _id: notification._id,
          });
          savedNotification.status = 'SUCCESS';
          savedNotification.save();
        }
      });
    });
  });
};


export {
  mailerCron
}