let myLibrary = [];

function Book(title, author, pages, read) {
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

function addBookToLibrary(book) {
  myLibrary.push(book);
  myLibrary.forEach((element) => {
    if (element.inLibrary !== true) {
      let div = document.createElement("div");
      div.classList.add("books");
      div.textContent = element.info();
      document.getElementById("library").appendChild(div);
      element.inLibrary = true;
    }
  });
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  // document.getElementById("myForm").style.display = "none";
  setBookAttributes();
}

function setBookAttributes() {
  let oForm = document.forms[0];
  let book = new Book();
  book.author = oForm.elements["author"].value;
  book.title = oForm.elements["title"].value;
  book.pages = oForm.elements["pages"].value;
  book.read = oForm.elements["read"].value;
  addBookToLibrary(book);
}
