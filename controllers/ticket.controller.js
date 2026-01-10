import { createTicketfn } from "../services/notification.service.js";
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


export {
  createTicket
}