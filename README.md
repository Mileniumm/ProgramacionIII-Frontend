# Programación III - Previgliano Milena Zoe

Proyectos y ejercicios de Programación III, de la Tecnicatura Superior en Desarrollo de Software de Quality ISAD (2026).

## Índice

### 1. HTML, CSS y JavaScript

| [Página de negocio](01-bases-web/01-pagina-de-negocio) | Sitio de Fresia, un local de comida saludable en Güemes, Córdoba | HTML semántico, Flexbox, Grid, responsive, audio y video |
| [Formulario de encuesta](01-bases-web/02-formulario-de-encuesta) | Encuesta para alumnos de la materia | Formularios, tipos de input, validación nativa |
| [Control de flujos](01-bases-web/03-control-de-flujos) | Ingreso con control de edad y calculadora con menú | `if`, `switch`, `do...while`, `prompt` y `alert` |
| [Flujos de datos](01-bases-web/04-flujos-de-datos) | Los mismos ejercicios, reescritos con más validaciones | Validación de entradas, `isNaN`, `break` y `continue` |
| [Guía de ejercicios CSS](01-bases-web/05-guia-css) | Los 12 ejercicios de la guía en un solo proyecto | CSS externo, selectores, unidades `em`, Google Fonts, herencia, parallax |
| [Arrays](01-bases-web/06-arrays) | Menú de personas y menú de productos con id autoincremental | `push`, `splice`, `findIndex`, `sort`, `map`, `join` |

### 2. Angular

| [Servicios](02-angular/01-servicios) | Dos componentes que comparten los datos de un auto a través de un servicio | `@Injectable`, `inject()`, singleton, interfaces, signals |
| [Actividad front](02-angular/02-actividad-front) | Dashboard con header y footer, más un inventario. Hecho en grupo | Componentes, `signal`, `computed`, `effect`, pipe `currency` |
| [Inventario](02-angular/03-inventario) | Panel de inventario con detalle de cada producto | Signals, `httpResource`, `rxResource`, rutas lazy, `input()` y `output()` |
| [Angular Forms](02-angular/04-angular-forms) | Registro con grupo anidado y lista dinámica de pasatiempos | `FormBuilder`, `Validators`, `patchValue`, `FormArray` |

### 3. C#
| [TP3: API REST](03-backend-csharp/01-tp3-api) | API de jugadores, equipos, entrenadores, estudiantes, cursos y actividades | ASP.NET Core, Entity Framework Core, MySQL, DAO, DTO, tests |

### 4. Patrones de diseño
| [Singleton](04-patrones-de-diseno/01-singleton) | Configuración compartida entre dos módulos | C# |
| [Builder](04-patrones-de-diseno/02-builder) | Pedidos de una tienda armados paso a paso | C# |
| [Prototype](04-patrones-de-diseno/03-prototype) | Personajes de un videojuego que se clonan | C# |
| [Factory Method](04-patrones-de-diseno/04-factory-method) | Exportador de informes en PDF, CSV, Excel y JSON | TypeScript |
| [Abstract Factory](04-patrones-de-diseno/05-abstract-factory) | Familias de DAOs con Entity Framework y con MockDatabase | C# |

## Proyecto integrador: ISCGB

Sistema de gestión del Instituto Superior Cura Gabriel Brochero, hecho en equipo. Yo trabajé en el frontend. Tiene sus propios repositorios:

- [ISCGB_Frontend](https://github.com/AnahidBG/ISCGB_Frontend): Angular
- [ISCGB_Backend](https://github.com/AnahidBG/ISCGB_Backend): ASP.NET Core Web API y SQL Server

## Cómo abrir cada proyecto

- **HTML, CSS y JavaScript:** abrí el archivo `.html` en el navegador. Los ejercicios con `prompt` se usan con ventanas emergentes.
- **Angular:** dentro de la carpeta del proyecto, `npm install` y después `npm start`. Se abre en `http://localhost:4200`.
- **C#:** necesita el SDK de .NET 9. Dentro de la carpeta, `dotnet run`. El TP3 además necesita MySQL; los pasos están en su README.
- **TypeScript (Factory Method):** `npm install` y después `npm start`.

## Estructura

```
EjerciciosProgramacionIII/
├── 01-bases-web/
│   ├── 01-pagina-de-negocio/
│   ├── 02-formulario-de-encuesta/
│   ├── 03-control-de-flujos/
│   ├── 04-flujos-de-datos/
│   ├── 05-guia-css/
│   └── 06-arrays/
├── 02-angular/
│   ├── 01-servicios/
│   ├── 02-actividad-front/
│   ├── 03-inventario/
│   └── 04-angular-forms/
├── 03-backend-csharp/
│   └── 01-tp3-api/
└── 04-patrones-de-diseno/
    ├── 01-singleton/
    ├── 02-builder/
    ├── 03-prototype/
    ├── 04-factory-method/
    └── 05-abstract-factory/
```
