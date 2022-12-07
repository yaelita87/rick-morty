const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
var passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

export default function validation(inputs) {
    const errors = {}

    if(!regexEmail.test(inputs.username)){
        errors.username = 'Debe introducir un email válido (mailfalso123@gmail.com)'
    } 
    else if(!passwordRegex.test(inputs.password)) {
        errors.password = 'La contraseña debe tener una longitud de entre 6 y 10 caracteres, y al menos un número, una mayúscula y una minúscula (ContraseñaFalsa123)'
    }

    return errors
}