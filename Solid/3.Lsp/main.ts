import { IPaymentProcessor } from './IPaymentProcessor';
import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
import { CashPayment } from './CashPayment';

export function handlePayment(paymentProcessor: IPaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50);