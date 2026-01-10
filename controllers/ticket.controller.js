import { createTicketfn, getAllfn, getTicketBYIdfn } from "../services/notification.service.js";
import { successResponseBody, errorResponseBody } from "../utils/responseBody.js";
import { STATUS_CODE } from "../utils/constans.js";


const createTicket = async (req, res) => {
  try{
    const response = await createTicketfn(req.body);
    successResponseBody.data = response;
    successResponseBody.message = "Successfully created notification ticket";
    return res.status(STATUS_CODE.CREATED).json(successResponseBody);
  } catch(error){
    if(error.err){
      errorResponseBody.error = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.error = error;
      return res.status(STATUS_CODE.BAD_REQUEST).json(errorResponseBody);
  }
}

const getAllTicket = async (req, res) => {
  try{
    const response = await getAllfn()
    successResponseBody.data = response;
    successResponseBody.message = "Successfully fetched all the tickets";

    return res.status(STATUS_CODE.OK).json(successResponseBody);
  }catch(error){
    errorResponseBody.error = error;
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}


const getTicketById = async (req, res) => {
  try{
    const response = await getTicketBYIdfn(req.params.id)
    successResponseBody.data = response;
    successResponseBody.message = "Successfully fetched details of the given id";

    return res.status(STATUS_CODE.OK).json(successResponseBody);
  }catch(error){
    if(error.err){
      errorResponseBody.error = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.error = error;
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}


export {
  createTicket,
  getAllTicket,
  getTicketById
}