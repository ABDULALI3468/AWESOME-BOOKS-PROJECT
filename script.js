let c = console.log;
const title = document.querySelector(".title_input");
const author = document.querySelector(".author_input");
const registeredBooks = document.querySelector(".registered_books");
const addButton = document.querySelector(".add-book");


let books = [];
let localstorage = JSON.parse(localStorage.getItem("books"));


window.onload = () => {
  if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"));
  }
  displayBook();
};


addButton.addEventListener("click", () => {
  let book = {
    title: title.value,
    author: author.value,
  };
  books.push(book);
  displayBook();
  localStorage.setItem("books", JSON.stringify(books));
});


function displayBook() {
  registeredBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
  registeredBooks.innerHTML += `
  <div>
    <p class="title">${books[i].title}</p>
    <p class="author">${books[i].author}</p>
    <button class="button" onclick="remove(${i})">remove</button>
    <hr/>
  </div>
  `;
    title.value = "";
    author.value = "";
  }
}

function remove(index) {
  books.splice(index, 1);
  displayBook();
  localStorage.setItem("books", JSON.stringify(books));
}
