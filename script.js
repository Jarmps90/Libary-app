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
    bookLibrary.forEach((book) => {book.id = self.crypto.randomUUID()});
    return displayBook(newBook);
};

// function displayBook(newBook) {
//     bookLibrary.forEach(newBook => {
//     document.querySelector('.title').innerText = newBook.title;
//     document.querySelector('.author').innerText = newBook.author;
//     document.querySelector('.pages').innerText = newBook.pages;
//     document.querySelector('.read').innerText = newBook.read;
// });
    
// }

function displayBook(newBook) {
    let jsonBook = JSON.stringify(newBook);
    bookLibrary.forEach(function(element) {
      let book = document.createElement('LI');
      let bookList = document.createTextNode(jsonBook);
      book.appendChild(bookList);
     
     
      document.querySelector('.container').appendChild(book);
    });
  };


    


addBookToLibrary('Harry Potter and the Sorcerer\'s stone', 'J.K Rowling', '320 pages', 'read');
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

