let c = console.log;
const title = document.querySelector(".title_input");
const author = document.querySelector(".author_input");
const registeredBooks = document.querySelector(".registered_books");
const button = document.querySelector(".add-book");

const books = [];
let localstorage = JSON.parse(localStorage.getItem("books"));
c(localstorage);

// window.onload=load()

// function load() {
//   let localstorage = JSON.parse(localStorage.getItem("books"));
//   for (let i = 0; localstorage.length; i += 1) {
//     registeredBooks.innerHTML += `
//   <div>
//     <p class="title">${localstorage[i].title}</p>
//     <p class="author">${localstorage[i].author}</p>
//     <button del-id=${
//       localstorage[i].id
//     } class="button" onclick="del(event)">remove</button>
//     <hr/>
//   </div>
//   `;
//   }
// }

window.onload = () => {
  let localstorage = JSON.parse(localStorage.getItem("books"));
  if (localStorage.getItem("books")){
    for (let i = 0; i<localstorage.length; i += 1) {
      registeredBooks.innerHTML += `
    <div>
      <p class="title">${localstorage[i].title}</p>
      <p class="author">${localstorage[i].author}</p>
      <button del-id=${localstorage[i].id} class="button" onclick="del(event)">remove</button>
      <hr/>
    </div>
    `;
    }
  }
};

button.addEventListener("click", () => {
  let book = {
    title: title.value,
    author: author.value,
    id: Math.floor(Math.random() * 9999999999),
  };
  books.push(book);

  registeredBooks.innerHTML += `
  <div>
    <p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <button del-id=${book.id} class="button" onclick="del(event)">remove</button>
    <hr/>
  </div>
  `;

  title.value = "";
  author.value = "";
  localStorage.setItem("books", JSON.stringify(books));
});

function del(e) {
  c("bindas")
  
  let id = e.target.getAttribute("del-id");
  c(id)
  c(books.length)
  c(books)
  let local = JSON.parse(localStorage.getItem("books"));
  for (let i = 0; i < local.length; i += 1) {
    c(i)
    if (local[i].id === Number(id)) {
      c("yes")
      books.splice(i, 1);
      localStorage.setItem("books", JSON.stringify(books));
    }
    else{
      c("no")
    }
  }

  e.target.parentNode.remove();
}

// function load() {
//   let localstorage = JSON.parse(localStorage.getItem("books"));
//   for (let i = 0; localstorage.length; i += 1) {
//     registeredBooks.innerHTML += `
//   <div>
//     <p class="title">${localstorage[i].title}</p>
//     <p class="author">${localstorage[i].author}</p>
//     <button del-id=${localstorage[i].id} class="button" onclick="del(event)">remove</button>
//     <hr/>
//   </div>
//   `;
//   }
// }
