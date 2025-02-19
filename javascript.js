const myLibrary = [Book("Sa", "Ba", "3", "read")];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
       let book = document.createElement("div"); 
       book.classList.add("book");
       for (let i = 0; i < 4; i++) {
        let info = document.createElement("p");
        book.appendChild(info);
        //switch statement
       }
       book.children[0].classList.add("title");
       book.children[0].textContent = myLibrary[i].title;
       book.children[1].textContent = myLibrary[i].author;
       book.children[2].textContent = myLibrary[i].pages;
       book.children[3].textContent = myLibrary[i].read;

//create a div inside of the main-content class with the same properties as other books, just with adjusted info
    }
}