import { EmailService } from "./EmailService";
import { SendNotification } from "./SendNotification";
import { SMSService } from "./SMSService";

const emailService = new EmailService();
const notificationWithEmail = new SendNotification(emailService);
notificationWithEmail.sendNotification("Hello, this is an email notification!");

const smsService = new SMSService();
const notificationWithSMS = new SendNotification(smsService);
notificationWithSMS.sendNotification("Hello, this is an SMS notification!");