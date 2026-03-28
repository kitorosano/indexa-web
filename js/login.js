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

const displayMessage = (message, type) => {
  $MESSAGE_CONTAINER.textContent = message;
  $MESSAGE_CONTAINER.className = type;
};

$LOGIN_FORM.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  displayMessage("", ""); // Limpiar mensajes anteriores

  const emailValue = $EMAIL_INPUT.value.trim();
  const passwordValue = $PASSWORD_INPUT.value.trim();

  if (!emailValue || !passwordValue) return;

  const body = {
    email: emailValue,
    password: passwordValue,
  };

  try {
    showLoading();

    const responseData = await POST("/auth", body, { withAuthorization: false });

    // Extraer el userId del token JWT y almacenarlo en localStorage
    const encryptedToken = responseData.accessToken.split(".")[1];
    const decryptedToken = JSON.parse(atob(encryptedToken));
    localStorage.setItem("userId", decryptedToken.id);

    window.location.href = "/";
  } catch (error) {
    displayMessage(error.message, "error");
    $PASSWORD_INPUT.value = "";
    validar();
  } finally {
    hideLoading();
  }
});

// ========= Lógica para mostrar/ocultar contraseña ========= //

const $SHOW_PASSWORD_ICON = document.getElementById("showPasswordIcon");
const openEye_SVG = `<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>`;
const closeEye_SVG = `<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>`;

$SHOW_PASSWORD_ICON.addEventListener("click", () => {
  $PASSWORD_INPUT.type =
    $PASSWORD_INPUT.type === "password" ? "text" : "password";

  $SHOW_PASSWORD_ICON.innerHTML =
    $PASSWORD_INPUT.type === "password" ? openEye_SVG : closeEye_SVG;
});
