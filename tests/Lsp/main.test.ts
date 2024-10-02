import { CashPayment } from "../../Solid/3.Lsp/CashPayment";
import { CreditCardPayment } from "../../Solid/3.Lsp/CreditCardPayment";
import { handlePayment } from "../../Solid/3.Lsp/main";
import { PayPalPayment } from "../../Solid/3.Lsp/PayPalPayment";

describe('PaymentProcessor', () => {
    test('CreditCardPayment processes payment correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const creditCardPayment = new CreditCardPayment();
        handlePayment(creditCardPayment, 100);
        
        expect(consoleSpy).toHaveBeenCalledWith('Processing credit card payment of $100');
        expect(consoleSpy).toHaveBeenCalledWith('Validating credit card details...');
        expect(consoleSpy).toHaveBeenCalledWith('Charging the credit card...');
        
        consoleSpy.mockRestore();
    });

    test('PayPalPayment processes payment correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const payPalPayment = new PayPalPayment();
        handlePayment(payPalPayment, 200);
        
        expect(consoleSpy).toHaveBeenCalledWith('Processing PayPal payment of $200');
        expect(consoleSpy).toHaveBeenCalledWith('Redirecting to PayPal...');
        expect(consoleSpy).toHaveBeenCalledWith('Completing PayPal transaction...');
        
        consoleSpy.mockRestore();
    });

    test('CashPayment processes payment correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const cashPayment = new CashPayment();
        handlePayment(cashPayment, 50);
        
        expect(consoleSpy).toHaveBeenCalledWith('Processing cash payment of $50');
        expect(consoleSpy).toHaveBeenCalledWith('Cash payment is being processed.');
        
        consoleSpy.mockRestore();
    });
});
