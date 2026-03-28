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

const displayMessage = (message, type) => {
  $MESSAGE_CONTAINER.textContent = message;
  $MESSAGE_CONTAINER.className = type;
};

$REGISTER_FORM.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  displayMessage("", ""); // Limpiar mensajes anteriores

  const nameValue = $NAME_INPUT.value.trim();
  const emailValue = $EMAIL_INPUT.value.trim();
  const passwordValue = $PASSWORD_INPUT.value.trim();
  const confirmPasswordValue = $CONFIRM_PASSWORD_INPUT.value.trim();

  if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue)
    return;

  if (passwordValue !== confirmPasswordValue) {
    displayMessage("Las contraseñas no coinciden", "error");
    $BTN.disabled = true;
    return;
  }

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  if (!nameRegex.test(nameValue)) {
    displayMessage(
      "Formato de nombre inválido. No se permiten números ni símbolos",
      "error",
    );
    $BTN.disabled = true;
    return;
  }

  const body = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  try {
    showLoading();

    const response = await POST("/users", body, { withAuthorization: false });
    $REGISTER_FORM.reset();

    displayMessage(response.message + ". Redirigiendo...", "success");

    // Redirigir a la página de login después de un breve retraso para mostrar el mensaje de éxito
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  } catch (error) {
    displayMessage(error.message, "error");

    $CONFIRM_PASSWORD_INPUT.value = "";
    validar();
  } finally {
    hideLoading();
  }
});

// ========= Lógica para mostrar/ocultar contraseña ========= //

const $SHOW_PASSWORD_ICON = document.getElementById("showPasswordIcon");
const $SHOW_CONFIRM_PASSWORD_ICON = document.getElementById(
  "showConfirmPasswordIcon",
);
const openEye_SVG = `<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>`;
const closeEye_SVG = `<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>`;
let passwordsAreVisible = false;

const togglePasswordVisibility = () => {
  passwordsAreVisible = !passwordsAreVisible;
  $PASSWORD_INPUT.type = passwordsAreVisible ? "text" : "password";
  $CONFIRM_PASSWORD_INPUT.type = passwordsAreVisible ? "text" : "password";

  $SHOW_PASSWORD_ICON.innerHTML = passwordsAreVisible
    ? closeEye_SVG
    : openEye_SVG;
  $SHOW_CONFIRM_PASSWORD_ICON.innerHTML = passwordsAreVisible
    ? closeEye_SVG
    : openEye_SVG;
};

$SHOW_PASSWORD_ICON.addEventListener("click", togglePasswordVisibility);
$SHOW_CONFIRM_PASSWORD_ICON.addEventListener("click", togglePasswordVisibility);