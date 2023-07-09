// const myLibrary = [];

// function Book(title, author, date, read) {
//     this.title = title;
//     this.author = author;
//     this.date = date;
//     this.read = read;
// }

// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.date}, ${this.read}`
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
// const badLiar = new Book('Bad Liar', 'Imagine Dragons', 1, 'not heard yet')

// const addToLibrary = function (book) {
//     myLibrary.push(book)
// }


// addToLibrary(theHobbit)
// addToLibrary(badLiar)

// console.log(myLibrary)

// ----------------- //
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