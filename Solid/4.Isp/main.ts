import { OldFashionedPrinter } from "./OldFashionedPrinter";

const printer = new OldFashionedPrinter();
printer.print("Document 1");

printer.scan("Document 2"); // Lỗi: Scan not supported
printer.fax("Document 3");  // Lỗi: Fax not supported