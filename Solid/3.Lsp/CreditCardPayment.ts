import { IPaymentProcessor } from './IPaymentProcessor';

export class CreditCardPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        console.log("Validating credit card details...");
        console.log("Charging the credit card...");
    }
}