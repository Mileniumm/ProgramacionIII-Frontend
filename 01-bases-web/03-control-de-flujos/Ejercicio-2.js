let option;
let valueA;
let valueB;
let exit = false;


do{
    option = prompt("ingrese una opcion \n1-Suma \n2-Resta \n3-Salir");

    // si toca cancelar, prompt devuelve null y el trim() rompía
    if (option === null) {
        alert("Adios");
        break;
    }

    option = parseInt(option.trim());

    switch(option){
        case 1:{
            valueA = parseInt(prompt("ingrese el primer valor"));
            valueB = parseInt(prompt("ingrese el segundo valor"));

            if(isNaN(valueA) || isNaN(valueB)) alert("Error: Uno o ambos valores no son números válidos");
            else alert(`El resultado de la suma es: ${valueA + valueB}`);

            break;
        }
        case 2:{
            valueA = parseInt(prompt("ingrese el primer valor"));
            valueB = parseInt(prompt("ingrese el segundo valor"));

            if(isNaN(valueA) || isNaN(valueB)) alert("Error: Uno o ambos valores no son números válidos");
            else if (valueA <= valueB) alert("Error: El primer número debe ser estrictamente mayor al segundo");
            else alert(`El resultado de la resta es: ${valueA - valueB}`);

            break;
        }
        case 3:{
            exit = true;
            alert("Adios");
            break;
        }
        default:
            alert("Ingrese una de las opciones correctas");
            break;
    }



}while(exit == false);