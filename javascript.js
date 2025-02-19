let myLibrary = [];
let mainContent = document.querySelector(".main-content")
const addBookBtn = document.querySelector(".add-book");

const dialog = document.querySelector("dialog");
const confirmBtn = document.querySelector("#confirmBtn");

addBookBtn.addEventListener("click", (e) => {
    dialog.showModal();
});
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    //let title = 
    addBookToLibrary(title, author, pages, read);
    displayBook();
    dialog.close();
})
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
function displayBook() {
       let book = document.createElement("div"); 
       book.classList.add("book");
       for (let j = 0; j < 4; j++) {
        let info = document.createElement("p");
        switch (j) {
            case 0:
                info.classList.add("title");
                info.textContent = myLibrary[myLibrary.length - 1].title;
                break;
            case 1:
                info.textContent = myLibrary[myLibrary.length - 1].author;
                break;
            case 2:
                info.textContent = myLibrary[myLibrary.length - 1].pages;
                break;
            case 3:
                info.textContent = myLibrary[myLibrary.length - 1].read;       
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
addBookToLibrary("owen is amazing", "bye", "300", "read");
displayBook();