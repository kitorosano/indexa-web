let users = [
  {
    email: "prueba@gmail.com",
    password: "123456",
  },
];

const $LOGIN_FORM = document.getElementById("loginForm");
const $EMAIL_INPUT = document.getElementById("email");
const $PASSWORD_INPUT = document.getElementById("password");
const $BTN = $LOGIN_FORM.querySelector("button");

const validar = () => {
  $BTN.disabled = !$EMAIL_INPUT.value.trim() || !$PASSWORD_INPUT.value.trim();
};

$EMAIL_INPUT.addEventListener("input", validar);
$PASSWORD_INPUT.addEventListener("input", validar);

validar();

const $MESSAGE_CONTAINER = document.getElementById("messageContainer");

$LOGIN_FORM.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const emailValue = $EMAIL_INPUT.value;
  const passwordValue = $PASSWORD_INPUT.value;

  const userEncontrado = users.find(
    (u) => u.email === emailValue && u.password === passwordValue,
  );

  if (userEncontrado) {
    $MESSAGE_CONTAINER.innerHTML = `<h4>¡Bienvenido ${userEncontrado.email}!</h4>`;
  } else {
    $MESSAGE_CONTAINER.innerHTML = `<h4>Credenciales incorrectas</h4>`;
  }

  $LOGIN_FORM.reset();
  validar();
});
