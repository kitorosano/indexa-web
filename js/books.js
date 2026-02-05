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

// ======== Logica para mostrar la lista de libros ========
const $LIST = document.getElementById("books-list");

// por cada libro de mi lista
books.forEach(function (book, i) {
  // crear un elemento <li>
  let $ITEM = document.createElement("li");

  $ITEM.innerHTML = `${book.id}. "${book.title}" de ${book.author}`;

  // agregar el <li> a la lista
  $LIST.appendChild($ITEM);
});

// ======== Logica para filtrar libros por titulo ========
const $SEARCH_INPUT = document.getElementsByName("q")[0];

// Agregar un evento de input al campo de búsqueda
$SEARCH_INPUT.addEventListener("input", function () {
  // obtener el valor del input de búsqueda
  const searchTitle = $SEARCH_INPUT.value;

  // filtrar los libros por título utilizando el método filter y
  // comparando el título del libro con el valor de búsqueda (ignorando mayúsculas y minúsculas)
  const filterBooks = books.filter(function (book) {
    const bookTitleLowercase = book.title.toLowerCase();
    const searchTitleLowercase = searchTitle.toLowerCase();
    return bookTitleLowercase.includes(searchTitleLowercase);
  });

  // Limpiar la lista antes de mostrar los resultados
  $LIST.innerHTML = "";

  // Volver a generar HTML para mostrar <li> por cada libro filtrado
  filterBooks.forEach(function (book) {
    let $ITEM = document.createElement("li");
    $ITEM.innerHTML = `${book.id}. "${book.title}" de ${book.author}`;
    $LIST.appendChild($ITEM);
  });
});
