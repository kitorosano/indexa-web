let users = [];

const $REGISTER_FORM = document.getElementById('registerForm');
const $NAME_INPUT = document.getElementById('name');
const $EMAIL_INPUT = document.getElementById('email');
const $PASSWORD_INPUT = document.getElementById('password');
const $BTN = $REGISTER_FORM.querySelector('button');

const validar = () => {
    $BTN.disabled = !$NAME_INPUT.value.trim() || !$EMAIL_INPUT.value.trim() || !$PASSWORD_INPUT.value.trim();
};

$NAME_INPUT.addEventListener('input', validar);
$EMAIL_INPUT.addEventListener('input', validar);
$PASSWORD_INPUT.addEventListener('input', validar);

validar();

const $MESSAGE_CONTAINER = document.getElementById('messageContainer');

$REGISTER_FORM.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nameValue = $NAME_INPUT.value;
    const emailValue = $EMAIL_INPUT.value;
    const passwordValue = $PASSWORD_INPUT.value;

    //se declara una expresión regular para validar el nombre de usuario, asegurando que solo contenga letras, números y guion bajo, y que no sea solo números
    const nameRegex = /^(?!\d+$)[A-Za-z0-9_]+$/;

    if (!nameRegex.test(nameValue)) {
        $MESSAGE_CONTAINER.innerHTML = `<h4>Nombre inválido. Solo letras, números y guion bajo. No puede ser solo números.</h4>`;
        $BTN.disabled = true;
        return;
    }

    const newUser = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    };

    users.push(newUser);

    $MESSAGE_CONTAINER.innerHTML = `<h4>Registro exitoso</h4>`;
    console.log(users);

    $BTN.disabled = false;
    $REGISTER_FORM.reset();
    validar();
});
