import { IFax } from "./IFax";
import { IPrinter } from "./IPrinter";
import { IScanner } from "./IScanner";

export class OldFashionedPrinter implements IPrinter, IScanner, IFax{
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }

    scan(document: string): void {
        throw new Error("Scan not supported");
    }

    fax(document: string): void {
        throw new Error("Fax not supported");
    }
}