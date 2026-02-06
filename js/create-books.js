let books = [];

const $CREATE_BOOK_FORM = document.getElementById("createBookFrom");
const $LIST = document.getElementById("books-list");

// Referencias y estado inicial (reconozco que para esto tuve que usar el bocho, pero la IA me ayudó a entenderlo mejor)
const $TITLE_INPUT = document.getElementById('title');
const $AUTHOR_INPUT = document.getElementById('author');
const $BTN = $CREATE_BOOK_FORM.querySelector('button');

const validar = () => {
  $BTN.disabled = !$TITLE_INPUT.value.trim() || !$AUTHOR_INPUT.value.trim();
};

$TITLE_INPUT.addEventListener('input', validar);
$AUTHOR_INPUT.addEventListener('input', validar);
validar();

$CREATE_BOOK_FORM.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // Capturar los valores de los inputs
  const $TITLE_INPUT = document.getElementById('title');
  const $AUTHOR_INPUT = document.getElementById('author');

  const newBook = {
    id: Date.now(),
    title: $TITLE_INPUT.value,
    author: $AUTHOR_INPUT.value
  };

  // Guardar en el array
  books.push(newBook);

  let $ITEM = document.createElement("li");
  $ITEM.innerHTML = `${newBook.id}: "${newBook.title}" de ${newBook.author}`;

  // Agregar el <li> a la lista <ul>
  $LIST.appendChild($ITEM);

  // Limpiar el formulario para el siguiente libro
  $CREATE_BOOK_FORM.reset();

  //Volver a deshabilitar boton tras el reset
  validar();
});