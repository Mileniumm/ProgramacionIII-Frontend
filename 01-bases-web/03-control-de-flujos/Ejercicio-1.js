let nombrePersona = prompt("Ingrese su nombre");
let nombreAcompaniante;
let edadAcompaniante;


if (!nombrePersona || nombrePersona.trim() == "") alert("No ingresaste un nombre valido");
else {
    alert(`Hola ${nombrePersona}`);

    let edadPersona = parseInt(prompt("Ingrese su edad"));

    if (isNaN(edadPersona)) alert("La edad tiene que ser un número");
    else if (edadPersona >= 18) alert(`Bienvenido ${nombrePersona} - FIN`);
    else if (edadPersona <= 16) alert(`Lo siento ${nombrePersona}, no puede ingresar, es menor de edad - FIN`);
    else {
        nombreAcompaniante = prompt(`${nombrePersona} ingrese el nombre de su acompañante`);
        edadAcompaniante = parseInt(prompt(`Ingrese la edad de ${nombreAcompaniante}`));

        if (isNaN(edadAcompaniante)) alert("La edad del acompañante tiene que ser un número");
        else if (edadAcompaniante < 18) alert("Lo siento, no puede ingresar, su acompañante es menor de edad - FIN");
        else alert(`Bienvenidos ${nombrePersona} y ${nombreAcompaniante} - FIN`);
    }
}
