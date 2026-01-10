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

const getAllfn = async () => {
  try{
    const response = await Ticket.find();
    return response;
  }catch(error){
    throw error;
  }
}


const getTicketBYIdfn = async (id) => {
  try {
    const response = await Ticket.findById(id);
    if(!response){
      throw {
        err: "No ticket details found",
        code: STATUS_CODE.NOT_FOUND
      }
    }

    return response;
  } catch (error) {
    throw error;
  }
}


export {
  createTicketfn,
  getAllfn,
  getTicketBYIdfn
}