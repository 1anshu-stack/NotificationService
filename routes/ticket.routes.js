import { createTicket } from "../controllers/ticket.controller.js"
import { verifyTicketNotificationCreateRequest } from "../middlewares/ticket.middleware.js";


const routes = (app) => {
  app.post(
    '/notiservice/api/v1/notifications',
    verifyTicketNotificationCreateRequest,
    createTicket
  )
}

export default routes;