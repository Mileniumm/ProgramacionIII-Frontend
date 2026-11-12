let nombre = prompt("Por favor, ingrese su nombre:");

if (!nombre || nombre.trim() === "") {
    alert("No ingresaste un nombre válido.");
} else {
    
    nombre = nombre.trim();
    alert(`Hola ${nombre}`);
    let edad = parseInt(prompt("Ingrese su edad:"));
    
    if (isNaN(edadUsuario)) {
        alert("Error: La edad ingresada no es un número válido.");
    } else if (edad >= 18) {
        alert(`Bienvenido ${nombre} - FIN`);
    } else if (edad < 16) {
        alert(`Lo siento, no puede ingresar, es menor de edad - FIN`);
    } else {

        let nombreAcompaniante = prompt(`${nombre}, ingrese el nombre de su acompañante:`);
        let edadAcompaniante = parseInt(prompt(`Ingrese la edad de ${nombreAcompaniante || 'su acompañante'}:`));
        if (!nombreAcompaniante || isNaN(edadAcompaniante) || edadAcompaniante < 18) {
            alert("Lo siento, no puede ingresar, su acompañante es menor de edad o los datos son inválidos - FIN");
        } else {
            alert(`Bienvenidos ${nombre} y ${nombreAcompaniante.trim()} - FIN`);
        }
    }
}