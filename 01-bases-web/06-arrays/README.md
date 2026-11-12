# Ejercicios JS 4: Arrays

Dos simulaciones con menú que se repiten hasta que se elige Salir. Las dos validan la opción ingresada: si no es un número del menú, avisan y vuelven a preguntar.

## Ejercicio 1: lista de personas

Menú con Agregar, Eliminar, Buscar, Mostrar y Salir sobre un array de nombres.

- **Agregar:** `push` del nombre, sin aceptar nombres vacíos.
- **Eliminar:** busca la posición con `findIndex` y la saca con `splice`. Si no está, avisa.
- **Buscar:** muestra "OK" si la persona está en la lista.
- **Mostrar:** el listado con `join("\n")`.

Al buscar y eliminar comparo en minúscula, así "Ana" y "ana" cuentan como la misma persona.

## Ejercicio 2: productos

Menú con Agregar producto, Mostrar, Eliminar y Salir sobre un array de objetos `{ id, nombre, precio }`.

- **Agregar:** valida que el nombre no esté vacío y que el precio sea un número. El id es autoincremental: uso una variable `ultimoId` que sube de a uno, así no se repite aunque se borre un producto.
- **Mostrar:** ordena por precio de menor a mayor con `sort((a, b) => a.precio - b.precio)` sobre una copia (`[...productos]`), para no cambiar el orden del array original.
- **Eliminar:** pide el id, valida que exista y lo saca con `splice`.

## Cómo probarlos

Abrí `ej1.html` o `ej2.html` en el navegador y respondé las ventanas emergentes. Si tocás Cancelar en el menú, la simulación termina.
