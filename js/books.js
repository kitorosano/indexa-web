// Datos prueba temporales
// A futuro se reemplazará por los datos del backend consultando la DB
let books = [
  {
    id: 100,
    title: "¿Como aprender a programar?",
    author: "Kitorosano",
  },
  {
    id: 101,
    title: "Como levantar un dron profesional en el Uruguay 2026",
    author: "Thiaguiño",
  },
  {
    id: 102,
    title: "Create una agenda personal",
    author: "Victoria",
  },
];

// Logica
const $LIST = document.getElementById("books-list");

// por cada libro de mi lista
books.forEach(function (book, i) {
  // crear un elemento <li>
  let $ITEM = document.createElement("li");

  $ITEM.innerHTML = `${book.id}. "${book.title}" de ${book.author}`;

  // agregar el <li> a la lista
  $LIST.appendChild($ITEM);
});
