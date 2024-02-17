const myLibrary = [];

const tableBody = document.querySelector("#tablebody");
const newBookButton = document.querySelector("#addbookbutton");
const dialog = document.querySelector("dialog");
const dialogForm = document.querySelector("dialog form");
const closeButton = document.querySelector("#close-dialog-button");
const submitButton = document.querySelector("#submitbutton");
const deleteBtns = document.getElementsByClassName("delete-btn");

class Book {
  constructor(author, title, numberOfPages, readed) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readed = readed;
  }
  switchReaded() {
    this.readed = !this.readed;
  }
}

function addBookToLibrary(author, title, numberOfPages, readed) {
  let book = new Book(author, title, numberOfPages, readed);
  myLibrary.push(book);
  return book;
}

function removeBookFromLibrary(e) {
  index = e.target.parentNode.parentNode.rowIndex - 1;
  myLibrary.splice(index, 1);
  tableBody.deleteRow(index);
}

function switchStatus(e) {
  let index = e.target.parentNode.parentNode.rowIndex - 1;
  let book = myLibrary[index];
  book.switchReaded();
  tableBody.rows[index].cells[3].innerText = book.readed
    ? "Readed"
    : "Not readed";
}

function addBookToTable(book) {
  // let index = myLibrary.length;
  let row = tableBody.insertRow();
  let authorCell = row.insertCell();
  authorCell.innerText = book.author;
  let titleCell = row.insertCell();
  titleCell.innerText = book.title;
  let pagesCell = row.insertCell();
  pagesCell.innerText = book.numberOfPages;
  let readedCell = row.insertCell();
  readedCell.innerText = book.readed ? "Readed" : "Not readed";
  let deleteCell = row.insertCell();
  deleteCell.innerHTML = `<button onclick = "removeBookFromLibrary(event)" type="button">Delete</button>`;
  let switchCell = row.insertCell();
  switchCell.innerHTML = `<button onclick = "switchStatus(event)" type="button">switch</button>`;
}

function createBook(e) {
  e.preventDefault;
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const numberOfPages = document.querySelector("#number_of_pages").value;
  const readed = document.querySelector("#readed").checked;
  const book = addBookToLibrary(author, title, numberOfPages, readed);
  addBookToTable(book);
  dialogForm.reset();
  dialog.close();
}

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialogForm.reset();
  dialog.close("no book entered");
});

submitButton.addEventListener("click", createBook);

let book1 = addBookToLibrary(
  "Fundamentals of Wavelets",
  "Goswami, Jaideva",
  228,
  false
);
addBookToTable(book1);
let book2 = addBookToLibrary(
  "Structure & Interpretation of Computer Programs",
  "Sussman, Gerald",
  240,
  false
);
addBookToTable(book2);
