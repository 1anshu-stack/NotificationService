Notification service:

* In order to send main Node gives up NodeMailer package.
In our database we are going to have one collection that collection have the details about user, we are going to set up a mechanism using which in every minute we are going to check our data base for all the email that have not been send yet and after that what are all mail that have been not send yet we are going to send those email and set status of those email send.

Cron job: For node we have node-cron. 

APIS: api to submit new notification email request, get all ticket api and get ticket by particular id.

CRON: Every 2 min it check in database if status of request is pending it will send the mail to it.

Main service and Notification service communication after successful payment. There are multiple library in node to make an http call("axios, node-rest-client").

 