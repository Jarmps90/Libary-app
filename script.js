const dialog = document.querySelector('dialog');
const container = document.querySelector('.books');
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

function displayBook() {
  container.innerHTML = '';
  
  for(let i = 0; i < bookLibrary.length; i++) {
    const  bookCard = document.createElement('div');
    bookCard.className = 'bookCard';

    
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
  
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
  };
};

function removeBookBtn(bookCard) {
  const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'removeBtn';
    bookCard.append(removeBtn);

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
        bookLibrary.forEach((book) => {book.id = self.crypto.randomUUID()});
        displayBook();
        dialog.close();
        
    }
};

function addBookBtn() {
  const addBtn = document.querySelector('#addButton');
 
    addBtn.addEventListener('click', () => {
     addBookToLibrary();}
    );

};

function openDialog() {
  const showBtn = document.querySelector('.addBook');
    showBtn.addEventListener('click', () => {
      dialog.showModal();
    });
    addBookBtn();
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



    
openDialog();
closeDialog();

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
