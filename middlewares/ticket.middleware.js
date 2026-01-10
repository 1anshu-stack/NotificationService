import { STATUS_CODE } from "../utils/constans.js";
import { successResponseBody, errorResponseBody } from "../utils/responseBody.js";


const verifyTicketNotificationCreateRequest = async (req, res, next) => {
  if(!req.body.subject){
    errorResponseBody.error = "No subject given for the email";
    return res.status(STATUS_CODE.BAD_REQUEST).json(errorResponseBody)
  }

  if(!req.body.content){
    errorResponseBody.error = "No content given for the email";
    return res.status(STATUS_CODE.BAD_REQUEST).json(errorResponseBody)
  }

  if(!req.body.recepientEmails || !(req.body.recepientEmails instanceof Array) || req.body.recepientEmails.length <= 0){
    errorResponseBody.error = 'No recepitent emails given';
    return res.status(STATUS_CODE.BAD_REQUEST).json(errorResponseBody)
  }

  next();
}

export {
  verifyTicketNotificationCreateRequest
}