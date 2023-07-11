const myLibrary = [];

function Book(title, author, date, read) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.date}, ${this.read}`
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
const theHungerGames = new Book('The Hunger Games', 'Suzanne Collins', 1, 'read')
const catchingFire = new Book('Catching Fire', 'Suzanne Collins', 1, 'not read yet')
const mockingJay = new Book('Mockingjay', 'Suzanne Collins', 1, 'read')
const ballad = new Book('The Ballad of Songbirds and Snakes', 'Suzanne Collins', 1, 'read')

const addToLibrary = function (book) {
    myLibrary.push(book)
}


addToLibrary(theHobbit)

addToLibrary(theHungerGames)
addToLibrary(catchingFire)
addToLibrary(mockingJay)
addToLibrary(ballad)

console.log(myLibrary)

let bookForm = document.getElementById('addBookForm')

bookForm.addEventListener('submit',function(e){
    e.preventDefault()

    let title = newBookTitle.value
    let author = newBookAuthor.value
    let date = newBookDate.value
    let read = readStatus

    let readStatusSubmitted;

    if (read.checked == true){
        readStatusSubmitted = 'read'
    } else {
        readStatusSubmitted = 'not read yet'
    }

    let submittedBook = new Book(title, author, date, readStatusSubmitted)
    addToLibrary(submittedBook)
    createBook(submittedBook)
    bookForm.reset()
})

function createLibrary() {
    for (let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i])
    }
}

window.addEventListener('load', createLibrary())

function createBook(newBook){
    let mainContent = document.querySelector('main')
    
    // create book card
    let book = document.createElement('div')
    book.classList.add('book')

    // create bookDetails div
    let bookDetails = document.createElement('div')
    bookDetails.classList.add('bookDetails')

    // create bookTitle element
    let bookTitle = document.createElement('h2')
    bookTitle.classList.add('bookTitle')
    bookTitle.textContent = newBook.title

    // create bookAuthor element
    let bookAuthor = document.createElement('p')
    bookAuthor.classList.add('bookAuthor')
    bookAuthor.textContent = `by ${newBook.author}`

    // create date element
    let bookDate = document.createElement('p')
    bookDate.classList.add('date')
    bookDate.textContent = newBook.date

    // create bookControls div
    let bookControls = document.createElement('div')
    bookControls.classList.add('bookControls')

    // create read unread button
    let readBook = document.createElement('button')
    if (newBook.read == 'read') {
        readBook.classList.add('readBook')
        readBook.textContent = "Read"
    } else if (newBook.read = 'not read yet') {
        readBook.classList.add('notReadBook')
        readBook.textContent = "Not Read"
    }

    // create remove book button
    let removeBookBtn = document.createElement('button')
    removeBookBtn.classList.add('removeBook')
    removeBookBtn.textContent = "Remove"

    bookDetails.appendChild(bookTitle)
    bookDetails.appendChild(bookAuthor)
    bookDetails.appendChild(bookDate)

    bookControls.appendChild(readBook)
    bookControls.appendChild(removeBookBtn)

    book.appendChild(bookDetails)
    book.appendChild(bookControls)

    mainContent.appendChild(book)
}

// --------Modal for adding book--------- //
const addBookBtn = document.getElementById('addBook');
const closeModalBtn = document.getElementById('modalBtn');

let container = document.getElementById('container');
let modal = document.getElementById('modal')


function toggle(){
    container.classList.toggle('active');
    modal.classList.toggle('active')
}

addBookBtn.addEventListener('click', toggle)
closeModalBtn.addEventListener('click', toggle)