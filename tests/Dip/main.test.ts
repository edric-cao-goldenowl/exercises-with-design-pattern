import { EmailService } from "../../Solid/5.Dip/EmailService";
import { SendNotification } from "../../Solid/5.Dip/SendNotification";
import { SMSService } from "../../Solid/5.Dip/SMSService";

describe('SendNotification', () => {
    
    test('should send a notification with email service', () => {
        const emailService = new EmailService();
        jest.spyOn(emailService, 'send');
        
        const notificationWithEmail = new SendNotification(emailService);
        notificationWithEmail.sendNotification("Email notification");
        
        expect(emailService.send).toHaveBeenCalledWith("Email notification");
    });

    test('should send a notification with SMS service', () => {
        const smsService = new SMSService();
        jest.spyOn(smsService, 'send');

        const notificationWithSMS = new SendNotification(smsService);
        notificationWithSMS.sendNotification("SMS notification");

        expect(smsService.send).toHaveBeenCalledWith("SMS notification");
    });
});
