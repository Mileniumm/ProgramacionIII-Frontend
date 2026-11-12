let calculadora = true;

do {
  
    let menu = prompt("Ingrese una opción:\n1. Suma\n2. Resta\n3. Salir");
    
    if (menu === null) {
        alert("Operación cancelada. Saliendo.");
        break; 
    }
    let opcionElegida = parseInt(menu.trim());

    if (isNaN(opcionElegida)) {
        alert("Error: Por favor, ingresá un número válido del menú.");
        continue; 
    }

    switch (opcionElegida) {
        case 1: {
            let sumaA = parseInt(prompt("Ingrese el primer valor para sumar:"));
            let sumB = parseInt(prompt("Ingrese el segundo valor para sumar:"));
            if (isNaN(sumaA) || isNaN(sumB)) {
                alert("Error: Uno o ambos valores no son números válidos. Volviendo al menú principal");
            } else {
                alert(`El resultado de la suma es: ${sumaA + sumB}`);
            }
            break;
        }
        case 2: {
            let  = parseInt(prompt("Ingrese el primer valor (debe ser el mayor):"));
            let sust = parseInt(prompt("Ingrese el segundo valor (debe ser el menor):"));
            if (isNaN(min) || isNaN(sust)) {
                alert("Error: Uno o ambos valores no son números válidos.");
            } else if (min <= sust) {
                alert("Operación rechazada: El primer número debe ser estrictamente mayor al segundo para asegurar un resultado positivo.");
            } else {
                alert(`El resultado de la resta es: ${min - sust}`);
            }
            break;
        }
        case 3: {
           
    false;
            alert("¡Gracias por usar la calculadora! byebye");
            break;
        }
        default:
            alert("Esa opción no existe en el sistema. Por favor, elegí 1, 2 o 3.");
            break;
    }

} while (calculadora);