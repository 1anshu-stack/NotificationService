import cron from 'node-cron';
import Ticket from '../models/ticketNotification.model.js';
import { sendMail } from '../services/email.service.js';


cron.schedule('*/2 * * * *', async () => {
  const notificationsToBeSent = await Ticket.find({
    status: 'PENDING'
  });

  notificationsToBeSent.forEach(notification => {
    const mailData = {
      from: 'bhupendrajogi661@gmail.com',
      to: notification.recepientEmails,
      subject: notification.subject,
      text: notification.content
    }

    sendMail(process.env.EMAIL, process.env.EMAIL_PASS, mailData)
  })
})