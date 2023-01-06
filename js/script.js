let myLibrary = []; //Array to store all books
let bookIndex = 0; //Global variable to differentiate books in library by index

class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = "by " + form.author.value;
    this.pages = form.pages.value + " pages";
    this.read = form.read.checked;
  }
}

//Arrow function to display the form
const addBook = document.getElementById("add-book");
addBook.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

//Arrow function to hide the form and call addBookToLibrary()
const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  addBookToLibrary();
});

function addBookToLibrary() {
  //Creates new Book, make a push to myLibrary and call displayLibraryInHTML()
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  bookIndex = myLibrary.length - 1;
  book.index = bookIndex; //Adds propertie to know the book index in myLibrary
  displayLibraryInHTML();
}

function displayLibraryInHTML() {
  //Displays library in HTML
  myLibrary.forEach((book) => {
    if (book.inLibrary !== true) {
      const newBook = createBookMarkup(book);
      document //Inserts the newBook in the HTML
        .getElementById("library")
        .insertAdjacentHTML("beforeend", newBook);
      book.inLibrary = true; //Adds propertie to know that the book is now in myLibrary
      toggleRead(book.index, book.read);
    }
  });
}

function createBookMarkup(book) {
  //Creates the HTML structure for each new Book
  const markup = `<div class="books">
                    <div class="book-info"> ${book.title} </div>
                    <div class="book-info"> ${book.author} </div>
                    <div class="book-info"> ${book.pages} </div>
                    <div class="buttons">
                      <button type="submit" class="remove-button" 
                        onclick="removeBook(${book.index})">Remove</button>
                      <button type="submit" class="read-button"
                        onclick="toggleRead(${book.index}, ${book.read})">Read
                      </button>
                    </div>
                  </div>`;
  return markup;
}

function removeBook(indexOfBook) {
  //Removes selected book of myLibrary[] and HTML content, updates all book indexes
  const library = document.getElementById("library");
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

function toggleRead(index, read) {
  //Toggles read button and value
  const library = document.getElementById("library");
  const currentBook = library.children[index];
  const readButton = currentBook.querySelector(".read-button");
  readButton.addEventListener("click", () => {
    toggleRead(index, !read);
  });
  if (read === false) {
    readButton.textContent = "Not Read";
    readButton.style.backgroundColor = "#ffedd5";
  } else {
    readButton.textContent = "Read";
    readButton.style.backgroundColor = "#fdba74";
  }
}
