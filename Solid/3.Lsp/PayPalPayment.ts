import { IPaymentProcessor } from './IPaymentProcessor';

export class PayPalPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
        console.log("Redirecting to PayPal...");
        console.log("Completing PayPal transaction...");
    }
}