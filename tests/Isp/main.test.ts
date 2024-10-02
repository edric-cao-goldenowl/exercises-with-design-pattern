import { OldFashionedPrinter } from "../../Solid/4.Isp/OldFashionedPrinter";

describe('OldFashionedPrinter', () => {
    test('should print a document', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const printer = new OldFashionedPrinter();
        
        printer.print("Document 1");
        
        expect(consoleSpy).toHaveBeenCalledWith('Printing document: Document 1');
        
        consoleSpy.mockRestore();
    });

    test('should throw an error when scanning', () => {
        const printer = new OldFashionedPrinter();
        
        expect(() => {
            printer.scan("Document 2");
        }).toThrowError("Scan not supported");
    });

    test('should throw an error when faxing', () => {
        const printer = new OldFashionedPrinter();
        
        expect(() => {
            printer.fax("Document 3");
        }).toThrowError("Fax not supported");
    });
});
