let myLibrary = []; //Array to store all books
let bookIndex = 0; //Global variable to differentiate books in library by index

function Book(title, author, pages, read) {
  //Book object constructor
  this.title = form.title.value;
  this.author = form.author.value;
  this.pages = form.pages.value + "pg";
  this.read = form.read.value;
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

//Arrow function to display the form
let newBook = document.getElementById("new-book");
newBook.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});

//Arrow function to hide the form and call addBookToLibrary()
let addBook = document.getElementById("add-book");
addBook.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "none";
  addBookToLibrary();
});

function addBookToLibrary() {
  //Creates new Book, make a push to myLibrary and call displayLibraryInHTML()
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  bookIndex = myLibrary.length - 1;
  book.index = bookIndex; //Adds propertie to know the book index in myLibrary
  displayLibraryInHTML();
}

function displayLibraryInHTML() {
  //Displays library in HTML and call addRemoveButtonEvent
  myLibrary.forEach((book) => {
    if (book.inLibrary !== true) {
      let newBook = createBookMarkup(book);
      document //Inserts the newBook in the HTML
        .getElementById("library")
        .insertAdjacentHTML("beforeend", newBook);
      book.inLibrary = true; //Adds propertie to know that the book is now in myLibrary
    }
  });
}

function createBookMarkup(book) {
  //Creates the HTML structure for each new Book
  let markup = `<div class="books">
                  <div class="book-info"> ${book.info()} </div>
                  <div class="buttons">
                    <button type="submit" class="remove-button" onclick="removeBook(${
                      book.index
                    })">Remove</button>
                    <button type="submit" class="read-button">Read</button>
                  </div>
                </div>`;
  return markup;
}

function removeBook(indexOfBook) {
  let library = document.getElementById("library");
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
  myLibrary.splice(indexOfBook, 1);
  myLibrary.forEach((book, bookIndex) => {
    book.index = bookIndex;
    book.inLibrary = false;
  });
  displayLibraryInHTML();
}
