/* eslint no-use-before-define: ["error", { "variables": false }] */
const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const registeredBooks = document.querySelector('.registered_books');
const addButton = document.querySelector('.add-book');

if (localStorage.getItem('books')) {
  if (localStorage.getItem('books').length > 2) {
    registeredBooks.classList.add('registered_books2');
  }
}

class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
  }

  addbook = (book) => {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBook = (index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  };
}

const booksArr = new BookClass();
let { books } = booksArr;

if (localStorage.getItem('books')) {
  if (localStorage.getItem('books').length <= 2) {
    registeredBooks.classList.remove('registered_books2');
  }
}

function displayBook() {
  registeredBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    registeredBooks.innerHTML += `
    <div class="container container${i % 2}">
      <p class="title">"${books[i].title}" by ${books[i].author}</p>
      <button class="button" onclick="remove(${i})">Remove</button>
    </div>
   `;
    title.value = '';
    author.value = '';
  }
}

function remove(index) {
  const book = new BookClass();
  book.removeBook(index);
  displayBook();
  localStorage.setItem('books', JSON.stringify(books));
  if (localStorage.getItem('books')) {
    if (localStorage.getItem('books').length <= 2) {
      registeredBooks.classList.remove('registered_books2');
    }
  }
}

const removeButton = document.querySelector('.heading');
removeButton.addEventListener('click', () => {
  remove();
});

window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  displayBook();
};

addButton.addEventListener('click', () => {
  const book = new BookClass(title.value, author.value);
  book.addbook(book);
  displayBook();
  localStorage.setItem('books', JSON.stringify(books));
  if (localStorage.getItem('books')) {
    if (localStorage.getItem('books').length > 2) {
      registeredBooks.classList.add('registered_books2');
    }
  }
});
