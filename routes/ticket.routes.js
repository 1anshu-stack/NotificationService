import { createTicket, getAllTicket, getTicketById } from "../controllers/ticket.controller.js"
import { verifyTicketNotificationCreateRequest } from "../middlewares/ticket.middleware.js";


const routes = (app) => {
  app.post(
    '/notiservice/api/v1/notifications',
    verifyTicketNotificationCreateRequest,
    createTicket
  )

  app.get(
    '/notiservice/api/v1/notifications/:id',
    getTicketById
  )

  app.get(
    '/notiservice/api/v1/notifications',
    getAllTicket
  )
}

export default routes;