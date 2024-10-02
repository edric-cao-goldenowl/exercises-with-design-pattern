import { INotificationService } from './INotificationService';

export class EmailService implements INotificationService {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}