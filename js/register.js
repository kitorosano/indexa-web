const $REGISTER_FORM = document.getElementById("registerForm");
const $NAME_INPUT = document.getElementById("name");
const $EMAIL_INPUT = document.getElementById("email");
const $PASSWORD_INPUT = document.getElementById("password");
const $CONFIRM_PASSWORD_INPUT = document.getElementById("confirmPassword");
const $BTN = $REGISTER_FORM.querySelector("button");
const $MESSAGE_CONTAINER = document.getElementById("messageContainer");

const validar = () => {
  $BTN.disabled =
    !$NAME_INPUT.value.trim() ||
    !$EMAIL_INPUT.value.trim() ||
    !$PASSWORD_INPUT.value.trim() ||
    !$CONFIRM_PASSWORD_INPUT.value.trim();
};
validar();

$NAME_INPUT.addEventListener("input", validar);
$EMAIL_INPUT.addEventListener("input", validar);
$PASSWORD_INPUT.addEventListener("input", validar);
$CONFIRM_PASSWORD_INPUT.addEventListener("input", validar);

$REGISTER_FORM.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nameValue = $NAME_INPUT.value.trim();
  const emailValue = $EMAIL_INPUT.value.trim();
  const passwordValue = $PASSWORD_INPUT.value.trim();
  const confirmPasswordValue = $CONFIRM_PASSWORD_INPUT.value.trim();

  if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue)
    return;

  if (passwordValue !== confirmPasswordValue) {
    $MESSAGE_CONTAINER.textContent = "Las contraseñas no coinciden";
    $MESSAGE_CONTAINER.style.color = "red"; // TODO: agregar clase CSS para mensajes de error
    $BTN.disabled = true;
    return;
  }

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

  if (!nameRegex.test(nameValue)) {
    $MESSAGE_CONTAINER.textContent =
      "Formato de nombre inválido. No se permiten números ni símbolos";
    $MESSAGE_CONTAINER.style.color = "red"; // TODO: agregar clase CSS para mensajes de error
    $BTN.disabled = true;
    return;
  }

  const body = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  try {
    // TODO: agregar spinner de carga mientras se espera la respuesta

    const response = await POST("/users", body);

    // TODO: quitar spinner de carga
    $MESSAGE_CONTAINER.textContent = response.message + ". Redirigiendo a login...";
    $MESSAGE_CONTAINER.style.color = "green"; // TODO: agregar clase CSS para mensajes de éxito
    $REGISTER_FORM.reset();

    // Redirigir a la página de login después de un breve retraso para mostrar el mensaje de éxito
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  } catch (error) {
    $MESSAGE_CONTAINER.textContent = error.message;
    $MESSAGE_CONTAINER.style.color = "red"; // TODO: agregar clase CSS para mensajes de error
    $PASSWORD_INPUT.value = "";
    validar();
  }
});
