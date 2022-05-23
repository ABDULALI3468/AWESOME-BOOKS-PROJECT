const title = document.querySelector('.title');
const author = document.querySelector('.author');
const registeredBooks = document.querySelector('.registered_books');

function generate(title, author) {
  return `
  <h1>Awesome books</h1>
  <p class="title">${title}</p>
  <p class="author">${author}</p>
  <button>remove</button>
  <hr>
  `;
}

const info = {
  title: "hello",
  author: "Hi",
  }
  
const ready = generate(info.title, info.author);

registeredBooks.innerHTML = ready;