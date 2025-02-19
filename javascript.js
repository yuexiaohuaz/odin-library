let myLibrary = [];
let mainContent = document.querySelector(".main-content")
const addBookBtn = document.querySelector(".add-book");
const dialog = document.querySelector("dialog");

addBookBtn.addEventListener("click", (e) => {
    dialog.showModal();
});
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
function displayBooks(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
       let book = document.createElement("div"); 
       book.classList.add("book");
       for (let j = 0; j < 4; j++) {
        let info = document.createElement("p");
        switch (j) {
            case 0:
                info.classList.add("title");
                info.textContent = myLibrary[i].title;
                break;
            case 1:
                info.textContent = myLibrary[i].author;
                break;
            case 2:
                info.textContent = myLibrary[i].pages;
                break;
            case 3:
                info.textContent = myLibrary[i].read;       
        }
        book.appendChild(info);
        //switch statement
       }
       let toggleBtn = document.createElement("button");
       toggleBtn.textContent = "Toggle Read";
       toggleBtn.classList.add("toggle-read");
       let delBtn = document.createElement("button");
       delBtn.textContent = "Delete";
       delBtn.classList.add("delete");
       book.appendChild(toggleBtn);
       book.appendChild(delBtn);
       mainContent.appendChild(book);


//create a div inside of the main-content class with the same properties as other books, just with adjusted info
    }
}
addBookToLibrary("owen is amazing", "bye", "300", "read");
displayBooks(myLibrary);