const myLibrary = [];

const tableBody = document.querySelector("#tablebody");
const newBookButton = document.querySelector("#addbookbutton");

class Book {
  constructor(author, title, numberOfPages, readed) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readed = readed;
  }
}

function addBookToLibrary(author, title, numberOfPages, readed) {
  let book = new Book(author, title, numberOfPages, readed);
  myLibrary.push(book);
}

function addBookToTable(book) {
  let row = tableBody.insertRow();
  let authorCell = row.insertCell();
  authorCell.innerText = book.author;
  let titleCell = row.insertCell();
  titleCell.innerText = book.title;
  let pagesCell = row.insertCell();
  pagesCell.innerText = book.numberOfPages;
  let readedCell = row.insertCell();
  readedCell.innerText = book.readed;
}

// let book = new Book("mongo", "mango", 20, true);
