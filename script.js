const dialog = document.querySelector('dialog');
const container = document.querySelector('.books');
const bookLibrary = [];

let newBook2 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'Not read');
let newBook3 = new Book('Harry Potter', 'J.K Rowling', '300 pages', 'Read') 
let newBook1 = new Book('Clean code', 'Robert C. Martin', '464', 'Not read');
bookLibrary.push(newBook1, newBook2, newBook3);

function Book(title, author, pages, read) {
  if(!new.target) {
        throw Error('You must use the "new" operator to call the constructor');
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function displayBook(book) {
  container.innerHTML = '';
  
  for(let i = 0; i < bookLibrary.length; i++) {
    const  bookCard = document.createElement('div');
    bookCard.className = 'bookCard';

    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    read.className = 'read';
    title.innerText = `Title: ${bookLibrary[i].title}`;
    author.innerText = `Author: ${bookLibrary[i].author}`;
    pages.innerText = `Pages: ${bookLibrary[i].pages}`;
    read.innerText = `Read: ${bookLibrary[i].read}`;
    bookCard.append(title);
    bookCard.append(author);
    bookCard.append(pages);
    bookCard.append(read);
    
    container.append(bookCard);
    removeBookBtn(bookCard);
    toggleReadBtn(bookCard);
    
  };
  const books = document.querySelectorAll('.bookCard');
  books.forEach((books, index) => {
    books.dataset.id = bookLibrary[index].id
  });
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
    
    if (authorValue.length > 0 && titleValue.length > 0 &&
      pagesValue.length > 0 && readValue.length > 0) {
        bookLibrary.push(newBook);
        bookLibrary.forEach((book) => {
          book.id = self.crypto.randomUUID()});
        displayBook(newBook);
    };
};

function removeBookBtn(bookCard) {
  const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'removeBtn';
    bookCard.append(removeBtn);
    removeBtn.addEventListener('click', (e) => {
      const bookCard = e.target.parentElement;
      const cardId = bookCard.getAttribute('data-id');
      const bookIndex = bookLibrary.findIndex((book) => book.id === cardId);
      
      if(bookIndex !== -1) {
        bookCard.remove();
        bookLibrary.splice(bookIndex, 1);
      };
    });
    
};

function openDialog() {
  const showBtn = document.querySelector('.addBook');
  const addBtn = document.querySelector('#addButton');
    showBtn.addEventListener('click', () => {
      dialog.showModal();
    });
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addBookToLibrary();
      dialog.close();
     }
     );
};

function closeDialog() {
  const closeBtn = document.querySelectorAll('.closeBtn');
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

function toggleReadBtn(bookCard) {
  const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.innerText = 'Read status';
    toggleBtn.className = 'toggleRead';
    bookCard.append(toggleBtn);
    toggleBtn.addEventListener('click', (e) => {
      const bookCard = e.target.parentElement;
      const cardId = bookCard.getAttribute('data-id');
      const bookIndex = bookLibrary.findIndex((book) => book.id === cardId);
      bookLibrary[bookIndex].toggleRead();
      displayBook();
    });
};

Book.prototype.toggleRead = function() {
  if(this.read === 'Read') {
    return this.read = 'Not read';
  } else {
    return this.read = 'Read';
  }
}

openDialog();
closeDialog();

