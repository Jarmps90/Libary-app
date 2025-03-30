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
   
    return dispalyBook(newBook);

};

function getBookId() {
    let bookId = bookLibrary.find(function(element) {
        return element;
    } );
    console.log(bookId);
}

function dispalyBook() {
   
}

    


// //"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
// getBookId();
// // console.log(bookLibrary);