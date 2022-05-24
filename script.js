const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const registeredBooks = document.querySelector('.registered_books');
const addButton = document.querySelector('.add-book');


let books = [];
const emtpty = [];
if (localStorage.getItem('books')) {
  if (localStorage.getItem('books').length > 2){
    registeredBooks.classList.add('registered_books2');
  }
}

if (localStorage.getItem('books')) {
  if (localStorage.getItem('books').length <= 2){
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
    const container = document.querySelector('.container');
  }
}

function remove(index) {
  books.splice(index, 1);
  displayBook();
  localStorage.setItem('books', JSON.stringify(books));
  if (localStorage.getItem('books')) {
    if (localStorage.getItem('books').length <= 2){
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
  class bookClass {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  };
  const book = new bookClass(title.value, author.value)
  // console.log(book)
  //   title: title.value,
  //   author: author.value,
  // };
  books.push(book);
  displayBook();
  localStorage.setItem('books', JSON.stringify(books));
  if (localStorage.getItem('books')) {
    if (localStorage.getItem('books').length > 2){
      registeredBooks.classList.add('registered_books2');
    }
  }
});