import mongoose  from "mongoose";

const ticketNotificationSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  recepientEmails: {
    type: [String],
    required: true
  },
  status: {
    type: String,
    enum: {
      valuse: ["SUCCESS", "FAILED", "PENDING"],
      message: "invalid ticket status"
    },
    required: true
  }
}, {timestamps: true});


const TicketNotificationModel = mongoose.model("TicketNotification", ticketNotificationSchema)
export default TicketNotificationModel;