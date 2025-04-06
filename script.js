const dialog = document.querySelector('dialog');
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

function addBookToLibrary() {
  const title = document.getElementById('book_title');
  const author = document.getElementById('book_author');
  const pages = document.querySelector('#book_pages');
  const read = document.querySelector('#book_read');
  const authorValue = author.value;
  const titleValue = title.value;
  const pagesValue = pages.value;
  const readValue = read.value;
  let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
   
    bookLibrary.forEach((book) => {book.id = self.crypto.randomUUID()});
    bookLibrary.push(newBook);
};

function addBookBtn() {
  const addBtn = document.querySelector('#addButton');
    addBtn.addEventListener('click', () => {
      addBookToLibrary();
    })
};

function openDialog() {
  const showBtn = document.querySelector('#addBook');
    showBtn.addEventListener('click', () => {
      dialog.showModal();
    })
};

function closeDialog() {
  const closeBtn = document.querySelector('.closeBtn');
    closeBtn.forEach(function(button) {
      button.addEventListener('click', () => {
        dialog.close();
      });
    });
    window.onclick = function(click) {
      if(click.target == dialog) {
        dialog.close();
      }
    }
};


    


addBookToLibrary('Harry Potter and the Sorcerer\'s stone', 'J.K Rowling', '320 pages', 'read');
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');



















// function displayBook(newBook) {
//     let jsonBook = JSON.stringify(newBook);
//     bookLibrary.forEach(function(element) {
//       let book = document.createElement('LI');
//       let bookList = document.createTextNode(jsonBook);
//       book.appendChild(bookList);
     
     
//       document.querySelector('.container').appendChild(book);
//     });
//   }