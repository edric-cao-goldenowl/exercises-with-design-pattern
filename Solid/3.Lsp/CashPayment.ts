import { IPaymentProcessor } from './IPaymentProcessor';

export class CashPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing cash payment of $${amount}`);
        console.log("Cash payment is being processed.");
    }
}