# Actividad front

Actividad grupal de Angular. El repositorio original del grupo es [AngelSilva98Dev/programacion_Front](https://github.com/AngelSilva98Dev/programacion_Front).

## Qué tiene

- Los componentes `Header` y `Footer`, y las páginas `Dashboard` e `Inventario`.
- En `Inventario`, la lista de productos es un `signal`. El filtro y el valor total del inventario son `computed`, y un `effect` guarda la cantidad de productos en `localStorage`.
- Los botones de stock usan `.update()` y devuelven un array nuevo, sin modificar el original.
- Los precios se muestran en pesos con el pipe `currency`.

## Cómo correrlo

```bash
npm install
npm start
```

Después abrí `http://localhost:4200`.
