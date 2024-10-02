import { Book } from './Book';
import { Library } from './Library';
import { BookSearch } from './BookSearch';


const book1 = new Book('Clean Code', 'Edric Cao', 2023);
const book2 = new Book('Design Pattern', 'Edric Cao', 2022);

const lib = new Library();
lib.addBook(book1);
lib.addBook(book2);

const booksInLibrary = lib.getListBooks();

const bookSearch = new BookSearch(booksInLibrary);

const foundBook = bookSearch.getBookByTitle('Clean Code');

console.log(foundBook);

