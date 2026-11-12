# Guía de ejercicios CSS

Los 12 ejercicios de la guía de CSS resueltos en un solo proyecto, como pedía la consigna.

## Cómo verlo

Abrí `index.html` en el navegador. Cada sección de la página corresponde a uno o más ejercicios, y en el HTML y en el CSS dejé un comentario con el número de cada uno.

## Archivos

- `index.html`: la página con todas las etiquetas que piden los ejercicios.
- `mis-estilos.css`: la hoja de estilos externa (el ejercicio 1 pide que se llame así). Las respuestas de los ejercicios con IA están como comentarios en este archivo.
- `fondo.jpg`: la imagen de fondo del ejercicio 6, que también uso en el parallax.

## Dónde está cada ejercicio

| Ejercicio | Qué hice |
| --- | --- |
| 1. CSS externo | `<link rel="stylesheet" href="mis-estilos.css">` en el `<head>` |
| 2. Sintaxis | `h1 { color: red; }` |
| 3. Clases | `.texto-azul` aplicada a un `<p>` |
| 4. Decoración de texto | Links sin subrayado y la clase `.tachado` en un precio viejo |
| 5. Listas sin viñetas | `nav ul { list-style: none; }` en el menú |
| 6. Fondo con imagen | `fondo.jpg` en el `body` con `background-repeat: no-repeat` |
| 7. Google Fonts | Roboto con `<link>` en el `<head>` |
| 8. Unidades em | `html` al 62.5% y los `h2` en `3em`, que son 30px |
| 9. Debugging | El código con errores comentado, la explicación y las reglas corregidas |
| 10. Herencia | Un padre con borde y color, un hijo que no hereda el borde y botones con `font: inherit` |
| 11. Parallax | Sección con `background-attachment: fixed` |
| 12. Accesibilidad textual | Párrafo largo con `line-height: 1.6`, `text-align: left` y ancho máximo |

## Cosas que fui encontrando

- Con el `html` al 62.5%, si le ponía `font-size: 1.6rem` al `body`, los `h2` en `3em` medían 48px y no 30px, porque `em` toma el tamaño del padre y no el de la raíz. Por eso agrandé el texto en `p`, `li` y `button` y dejé el `body` sin tamaño.
- El parallax no se ve en Safari de iPhone: ahí `background-attachment: fixed` no funciona y el fondo se mueve normal.
- Los botones no heredan la tipografía del padre porque el navegador ya les pone una propia; hay que forzarla con `font: inherit`.
