const $LOGIN_FORM = document.getElementById("loginForm");
const $EMAIL_INPUT = document.getElementById("email");
const $PASSWORD_INPUT = document.getElementById("password");
const $BTN = $LOGIN_FORM.querySelector("button");
const $MESSAGE_CONTAINER = document.getElementById("messageContainer");

const validar = () => {
  $BTN.disabled = !$EMAIL_INPUT.value.trim() || !$PASSWORD_INPUT.value.trim();
};
validar();

$EMAIL_INPUT.addEventListener("input", validar);
$PASSWORD_INPUT.addEventListener("input", validar);

$LOGIN_FORM.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const emailValue = $EMAIL_INPUT.value.trim();
  const passwordValue = $PASSWORD_INPUT.value.trim();

  if (!emailValue || !passwordValue) return;

  const body = {
    email: emailValue,
    password: passwordValue,
  };

  try {
    // TODO: agregar spinner de carga mientras se espera la respuesta

    await POST("/auth", body);

    window.location.href = "index.html";
  } catch (error) {
    $MESSAGE_CONTAINER.textContent = error.message;
    $MESSAGE_CONTAINER.style.color = "red"; // TODO: agregar clase CSS para mensajes de error
    $PASSWORD_INPUT.value = "";
    validar();
  } finally {
    // TODO: quitar spinner de carga
  }
});
