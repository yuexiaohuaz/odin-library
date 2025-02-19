let myLibrary = [];
let mainContent = document.querySelector(".main-content")
const addBookBtn = document.querySelector(".add-book");

addBookBtn.addEventListener("click", () => {

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
       let button = document.createElement("button");
       button.textContent = "Toggle Read";
       book.appendChild(button);
       mainContent.appendChild(book);


//create a div inside of the main-content class with the same properties as other books, just with adjusted info
    }
}
addBookToLibrary("hi", "bye", "300", "read");
displayBooks(myLibrary);