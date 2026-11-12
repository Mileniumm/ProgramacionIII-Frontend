let nombrePersona = prompt("Ingrese su nombre");
let nombreAcompaniante;
let edadAcompaniante;


if(nombrePersona =="")alert("Ingrese un nombre valido");
else alert(`Hola ${nombrePersona}`) ;

let edadPersona = prompt("Ingrese su edad");

if(edadPersona <= 16)alert(`Lo siento ${nombrePersona}, no puede ingresar, es menor de edad`)

if (edadPersona >= 18) alert(`Bienvenido ${nombrePersona}`);
else if(edadPersona > 16 && edadPersona < 18){
    nombreAcompaniante = prompt(`${nombrePersona} ingrese el nombre de su acompañante`);
    edadAcompaniante = prompt("ingrese la edad de su acompañante");
    if(edadAcompaniante < 18){
        alert("Lo siento, no puede ingresar, su acompañante es menor de edad");

    }
    else alert(`Bienvenidos ${nombrePersona} y ${nombreAcompaniante}`)

}
