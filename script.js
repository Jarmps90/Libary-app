const bookLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error('You must use the "new" operator to call the constructor')
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };

function addBookToLibrary(title, author, pages, read) {
    let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
    bookLibrary.push(theHobbit)
}
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
// console.log(theHobbit.info());
// //"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
addBookToLibrary();