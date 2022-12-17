let myLibrary = []; //Array to store all books
let bookIndex = 0; //Global variable to differentiate books in library by index

function Book(title, author, pages, read) {
  //Book object constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      (this.read === "read" ? this.read : this.read + " yet")
    );
  };
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  setBookAttributes();
}

function setBookAttributes() {
  //Creates new book with form values as it's corresponding properties
  //Then calls function to add the new book to the library
  let oForm = document.forms[0];
  let book = new Book();
  book.author = oForm.elements["author"].value;
  book.title = oForm.elements["title"].value;
  book.pages = oForm.elements["pages"].value;
  book.read = oForm.elements["read"].value;
  addBookToLibrary(book);
}

function addBookToLibrary(book) {
  //Pushes new book to myLibrary and adds it to the HTML
  myLibrary.push(book);
  myLibrary.forEach((element) => {
    if (element.inLibrary !== true) {
      let newBook = createBookMarkup(element);
      document //Inserts the newBook in the HTML
        .getElementById("library")
        .insertAdjacentHTML("beforeend", newBook);
      element.inLibrary = true; //Adds propertie to know that the book is now in myLibrary
      element.index = bookIndex; //Adds propertie to know the book index in myLibrary
      bookIndex++;
    }
  });
}

function createBookMarkup(newBook) {
  //Creates the HTML structure for each new Book
  let markup = `<div class="books"> ${newBook.info()} </div>
                <div class="buttons>
                  <button type="submit" class="remove-button" onclick="removeBook()">Remove</button>
                </div>`;
  return markup;
}

function removeBook() {}
