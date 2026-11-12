# Inventario

Práctica de Programación III para entender signals y resources en Angular 22.
Arranqué con el ejemplo del panel de inventario de las slides de reactividad y le fui agregando cosas.

## Cómo correrlo

```bash
npm install
npm start
```

Después entrar a `http://localhost:4200`. No necesita backend, los datos salen de los json de `public/api`.

## Qué practiqué

- `signal`, `computed` y `effect` (todo el estado está en `inventario.store.ts`)
- `httpResource` para traer la lista y `rxResource` para el detalle de cada producto
- componentes con `input()` y `output()` (el selector de cantidad y las tarjetas de arriba)
- rutas con lazy loading y el `:id` como input (`withComponentInputBinding`)
- el control flow nuevo (`@for`, `@if`, `@switch`)
- pipe `currency` con formato argentino

## Cosas que fui encontrando

Los videos que miré eran de Angular 16 y 19, y varias cosas ya no funcionan igual en la 22:

- `mutate()` lo sacaron en la v17. Hay que usar `update()` y devolver un array nuevo, porque el signal compara referencias y si modificás el mismo array no se entera.
- En `rxResource` ya no es `loader`, es `stream`. Y `status()` ahora devuelve texto (`'loading'`, `'resolved'`...), no un enum como en el video.
- `value()` tira error si el resource falló, por eso uso `hasValue()` antes.
- Mi proyecto no tiene zone.js, entonces hacer `subscribe` y asignar a una variable común no actualiza la vista. Por eso todo lo que se muestra es signal.
- En Angular 22 los componentes son OnPush por defecto y `strictTemplates` viene activado aunque no esté en el tsconfig.
- Con `resource()` + `fetch` no pasan los interceptores de HttpClient, por eso preferí `httpResource` y `rxResource`.

## Para probar

En el panel dejé visible el estado del resource:

- al entrar pasa de `loading` a `resolved`
- si cambio una cantidad o elimino un producto queda en `local`
- si toco "Recargar" pasa por `reloading` y vuelve a `resolved` (se pierden los cambios porque no hay backend todavía)
- si entro a `/productos/99` el detalle da error

En la consola aparece un aviso cada vez que hay productos con stock bajo (eso lo hace el `effect`).

## Pendientes

- [ ] Formulario para agregar productos (cuando veamos Forms, probar signal forms)
- [ ] Filtro por categoría
- [ ] Conectarlo a una API en .NET como la del TP (ProductsController + ProductDAO) y hacer los post/put/delete con HttpClient
- [ ] Tests del store con Vitest

## Lo que consulté

- [Guía de Resource (angular.dev)](https://angular.dev/guide/signals/resource)
- [Opciones del compilador de Angular](https://angular.dev/reference/configs/angular-compiler-options)
- [Novedades de Angular 22 (Ninja Squad)](https://blog.ninja-squad.com/2026/06/03/what-is-new-angular-22.0)
- Slides "Reactividad Moderna en Angular" de la materia
- Videos de Signals (Angular 16) y de Resource / RxResource (Angular 19)
