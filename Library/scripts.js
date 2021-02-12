let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.isRead = isRead;
    myLibrary.push(newBook);
    return myLibrary;
}

const bookBtn = document.getElementById("newBook");
const submitBtn = document.getElementById("submit");

bookBtn.addEventListener('click', openPopup);
submitBtn.addEventListener('click', submit);

function openPopup() {
    let popupForm = document.getElementById("popupForm");
    popupForm.style.display = 'block';
}

function submit() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isRead = document.getElementById('isRead').value;
    addBookToLibrary(title, author, pages, isRead);
    document.getElementById('popupForm').reset();
    popupForm.style.display = 'none';
}


