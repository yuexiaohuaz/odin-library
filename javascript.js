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
    addBookToLibrary(title, author, pages, read);
    displayBook();
    dialog.close();
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
function displayBook() {
       let book = document.createElement("div"); 
       book.classList.add("book");
       let toggleBtn = document.createElement("button");
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
                info.classList.add("read");
                info.textContent = myLibrary[myLibrary.length - 1].read;   
                
                toggleBtn.textContent = "Toggle Read";
                toggleBtn.classList.add("toggle-read");
                toggleBtn.addEventListener("click", (e)=> {
                    if (myLibrary[myLibrary.length - 1].read == "read") {
                        info.textContent="unread";
                        myLibrary[myLibrary.length - 1].read = "unread";
                    } 
                    else if (myLibrary[myLibrary.length - 1].read == "unread") {
                        info.textContent="read";
                        myLibrary[myLibrary.length - 1].read = "read";
                    }
            });

        }
        book.appendChild(info);
       }
       let delBtn = document.createElement("button");
       delBtn.textContent = "Delete";
       delBtn.addEventListener("click", (e) => {
        mainContent.removeChild(book);
    });
       delBtn.classList.add("delete");
       book.appendChild(toggleBtn);
       book.appendChild(delBtn);
       mainContent.appendChild(book);



}
addBookToLibrary("bob is amazing", "bye", "300", "read");
displayBook();