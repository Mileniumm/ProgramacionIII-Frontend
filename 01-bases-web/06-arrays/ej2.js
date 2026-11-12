let productos = [];
let ultimoId = 0;
let opcion;
let salir = false;

do {
    opcion = prompt("Ingrese una opción:\n1 - Agregar producto\n2 - Mostrar\n3 - Eliminar\n4 - Salir");

    if (opcion === null) {
        alert("Saliendo del menú");
        break;
    }

    opcion = parseInt(opcion.trim());

    if (isNaN(opcion) || opcion < 1 || opcion > 4) {
        alert("Opción inválida, ingresá un número del 1 al 4");
        continue;
    }

    switch (opcion) {
        case 1: {
            let nombre = prompt("Ingrese el nombre del producto");

            if (nombre === null || nombre.trim() === "") {
                alert("El nombre no puede estar vacío");
                break;
            }

            let precio = parseFloat(prompt("Ingrese el precio"));

            if (isNaN(precio) || precio < 0) {
                alert("El precio tiene que ser un número mayor o igual a 0");
                break;
            }

            // el id sube de a uno y no se reutiliza aunque se borre un producto
            ultimoId++;
            productos.push({ id: ultimoId, nombre: nombre.trim(), precio: precio });
            alert(`Se agregó ${nombre.trim()} con el id ${ultimoId}`);
            break;
        }
        case 2: {
            if (productos.length === 0) {
                alert("No hay productos cargados");
                break;
            }

            // ordeno una copia para no cambiar el orden del array original
            let ordenados = [...productos].sort((a, b) => a.precio - b.precio);
            let listado = ordenados.map((p) => `#${p.id} - ${p.nombre} - $${p.precio}`);

            alert(`Productos (de menor a mayor precio):\n${listado.join("\n")}`);
            break;
        }
        case 3: {
            let id = parseInt(prompt("Ingrese el id del producto a eliminar"));

            if (isNaN(id)) {
                alert("El id tiene que ser un número");
                break;
            }

            let posicion = productos.findIndex((p) => p.id === id);

            if (posicion === -1) {
                alert(`No existe un producto con el id ${id}`);
            } else {
                let eliminado = productos.splice(posicion, 1);
                alert(`Se eliminó ${eliminado[0].nombre}`);
            }
            break;
        }
        case 4: {
            salir = true;
            alert("Fin de la simulación");
            break;
        }
    }
} while (!salir);
