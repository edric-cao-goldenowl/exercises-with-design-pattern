import { INotificationService } from './INotificationService';

export class SMSService implements INotificationService {
    send(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}