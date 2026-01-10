import Ticket from "../models/ticketNotification.model.js";
import { STATUS_CODE } from "../utils/constans.js";


const createTicketfn = async (data) => {
  try{
    const ticket = await Ticket.create(data);
    return ticket;
  } catch(error){
    if(error.name == "ValidationError"){
      let err = {};
      Object.keys(error.errors).forEach(key => {
        err[key] = error.errors[key].message;
      });
      throw {
        err,
        code: STATUS_CODE.UNPROCESSABLE_ENTITY
      }
    }
  }
}


export {
  createTicketfn
}