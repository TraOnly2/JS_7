class Book {
    constructor(title, author, genre, available = true) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }

    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }

    getGenre() {
        return this.genre;
    }
    setGenre(genre) {
        this.genre = genre;
    }

    isAvailable() {
        return this.available;
    }
    setAvailable(available) {
        this.available = available;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getBooks() {
        return this.books;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.getTitle() !== title);
    }

    searchBook(title, author, genre) {
        return this.books.filter(book => 
            (title && book.getTitle().toLowerCase().includes(title.toLowerCase())) ||
            (author && book.getAuthor().toLowerCase().includes(author.toLowerCase())) ||
            (genre && book.getGenre().toLowerCase().includes(genre.toLowerCase()))
        );
    }

    listAvailableBooks() {
        return this.books.filter(book => book.isAvailable());
    }

    borrowBook(title) {
        const book = this.books.find(book => book.getTitle() === title && book.isAvailable());
        if (book) {
            book.setAvailable(false);
            return book;
        }
        return null;
    }

    returnBook(title) {
        const book = this.books.find(book => book.getTitle() === title && !book.isAvailable());
        if (book) {
            book.setAvailable(true);
            return book;
        }
        return null;
    }
}

class User_acc {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getBorrowedBooks() {
        return this.borrowedBooks;
    }

    borrowBook(library, title) {
        const book = library.borrowBook(title);
        if (book) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${title}" from ${library.getName()}`);
        } else {
            console.log(`"${title}" is not available in ${library.getName()}`);
        }
    }

    returnBook(library, title) {
        const bookIndex = this.borrowedBooks.findIndex(book => book.getTitle() === title);
        if (bookIndex !== -1) {
            const book = this.borrowedBooks.splice(bookIndex, 1)[0];
            library.returnBook(title);
            console.log(`${this.name} returned "${title}" to ${library.getName()}`);
        } else {
            console.log(`${this.name} does not have "${title}" borrowed`);
        }
    }

    viewBorrowedBooks() {
        return this.borrowedBooks.map(book => book.getTitle());
    }
}

// Example usage:
const library = new Library('LB 1');

const book1 = new Book('Advenger', 'George Orwell', 'Dystopian');
const book2 = new Book('Information Technology', 'Harper Lee', 'Fiction');
const book3 = new Book('Alein', 'F. Scott Fitzgerald', 'Classic');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user = new User_acc('Alice');


user.borrowBook(library, 'Advenger');
console.log(user.viewBorrowedBooks());

user.returnBook(library, 'Advenger');
console.log(library.listAvailableBooks().map(book => book.getTitle()));

console.log(library.searchBook('Advenger', '', '').map(book => book.getTitle())); 

console.log(library.listAvailableBooks().map(book => book.getTitle())); 

console.log(library);
