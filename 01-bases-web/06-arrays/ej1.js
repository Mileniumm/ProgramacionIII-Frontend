let personas = [];
let opcion;
let salir = false;

// devuelve la posición de la persona en el array, o -1 si no está
// comparo en minúscula para que "Ana" y "ana" sean la misma persona
function buscarPosicion(nombre) {
    return personas.findIndex((persona) => persona.toLowerCase() === nombre.trim().toLowerCase());
}

do {
    opcion = prompt("Ingrese una opción:\n1 - Agregar\n2 - Eliminar\n3 - Buscar\n4 - Mostrar\n5 - Salir");

    // si toca cancelar, prompt devuelve null
    if (opcion === null) {
        alert("Saliendo del menú");
        break;
    }

    opcion = parseInt(opcion.trim());

    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        alert("Opción inválida, ingresá un número del 1 al 5");
        continue;
    }

    switch (opcion) {
        case 1: {
            let nombre = prompt("Ingrese el nombre de una persona");

            if (nombre === null || nombre.trim() === "") {
                alert("No ingresaste ningún nombre");
            } else {
                personas.push(nombre.trim());
                alert(`${nombre.trim()} se agregó a la lista`);
            }
            break;
        }
        case 2: {
            let nombre = prompt("Ingrese el nombre de la persona a eliminar");

            if (nombre === null || nombre.trim() === "") {
                alert("No ingresaste ningún nombre");
                break;
            }

            let posicion = buscarPosicion(nombre);

            if (posicion === -1) {
                alert(`${nombre.trim()} no está en la lista`);
            } else {
                let eliminada = personas.splice(posicion, 1);
                alert(`Se eliminó a ${eliminada[0]}`);
            }
            break;
        }
        case 3: {
            let nombre = prompt("Ingrese el nombre de la persona a buscar");

            if (nombre === null || nombre.trim() === "") {
                alert("No ingresaste ningún nombre");
            } else if (buscarPosicion(nombre) !== -1) {
                alert("OK");
            } else {
                alert(`${nombre.trim()} no está en la lista`);
            }
            break;
        }
        case 4: {
            if (personas.length === 0) {
                alert("La lista está vacía");
            } else {
                alert(`Personas en la lista:\n${personas.join("\n")}`);
            }
            break;
        }
        case 5: {
            salir = true;
            alert("Fin de la simulación");
            break;
        }
    }
} while (!salir);
