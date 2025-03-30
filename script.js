const bookLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error('You must use the "new" operator to call the constructor');
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
    bookLibrary.forEach((item) => {item.id = self.crypto.randomUUID()});
};

function getBookId(bookLibrary) {
    let bookId = bookLibrary.find();
    console.log(bookId);
    return dispalyBook(bookId);
}

function dispalyBook(bookId) {
    document.getElementById('title').innerText = Book.title;
}

    


// //"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

// console.log(bookLibrary);