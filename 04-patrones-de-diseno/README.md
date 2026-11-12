# Patrones de diseño

Los ejercicios de patrones creacionales. Cada carpeta es un proyecto aparte con su propio README, donde están los requisitos y las respuestas a las preguntas de reflexión.

| Patrón | Ejercicio | Lenguaje | Cómo correrlo |
| --- | --- | --- | --- |
| [Singleton](01-singleton) | Administrador de configuración | C# | `dotnet run` |
| [Builder](02-builder) | Pedidos de una tienda | C# | `dotnet run` |
| [Prototype](03-prototype) | Personajes de un videojuego | C# | `dotnet run` |
| [Factory Method](04-factory-method) | Exportador de informes académicos | TypeScript | `npm install` y `npm start` |
| [Abstract Factory](05-abstract-factory) | Acceso a datos con EF y Mock | C# (Web API) | `dotnet run` |

Los proyectos de C# usan .NET 9, igual que el TP3.

## En una línea

- **Singleton:** una sola instancia para toda la aplicación, con un único punto de acceso.
- **Builder:** armar un objeto complejo paso a paso y validarlo antes de crearlo.
- **Prototype:** crear objetos copiando uno que ya está configurado.
- **Factory Method:** una clase base deja que sus subclases decidan qué objeto crear.
- **Abstract Factory:** crear familias de objetos relacionados sin depender de sus clases concretas.
