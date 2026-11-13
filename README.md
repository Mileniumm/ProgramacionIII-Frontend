# Programación III (Frontend) - Previgliano Milena Zoe

Proyectos y ejercicios de frontend de Programación III, de la Tecnicatura Superior en Desarrollo de Software de Quality ISAD (2026).

El backend de la materia (la API REST del TP3 y los patrones en C#) está en [ProgramacionIII-Backend](https://github.com/Mileniumm/ProgramacionIII-Backend).

## Índice

### 1. HTML, CSS y JavaScript

| Proyecto | Qué es | Temas |
| --- | --- | --- |
| [Página de negocio](01-bases-web/01-pagina-de-negocio) | Sitio de Fresia, un local de comida saludable en Güemes, Córdoba | HTML semántico, Flexbox, Grid, responsive, audio y video |
| [Formulario de encuesta](01-bases-web/02-formulario-de-encuesta) | Encuesta para alumnos de la materia | Formularios, tipos de input, validación nativa |
| [Control de flujos](01-bases-web/03-control-de-flujos) | Ingreso con control de edad y calculadora con menú | `if`, `switch`, `do...while`, `prompt` y `alert` |
| [Flujos de datos](01-bases-web/04-flujos-de-datos) | Los mismos ejercicios, reescritos con más validaciones | Validación de entradas, `isNaN`, `break` y `continue` |
| [Guía de ejercicios CSS](01-bases-web/05-guia-css) | Los 12 ejercicios de la guía en un solo proyecto | CSS externo, selectores, unidades `em`, Google Fonts, herencia, parallax |
| [Arrays](01-bases-web/06-arrays) | Menú de personas y menú de productos con id autoincremental | `push`, `splice`, `findIndex`, `sort`, `map`, `join` |

### 2. Angular

| Proyecto | Qué es | Temas |
| --- | --- | --- |
| [Servicios](02-angular/01-servicios) | Dos componentes que comparten los datos de un auto a través de un servicio | `@Injectable`, `inject()`, singleton, interfaces, signals |
| [Actividad front](02-angular/02-actividad-front) | Dashboard con header y footer, más un inventario. Hecho en grupo | Componentes, `signal`, `computed`, `effect`, pipe `currency` |
| [Inventario](02-angular/03-inventario) | Panel de inventario con detalle de cada producto | Signals, `httpResource`, `rxResource`, rutas lazy, `input()` y `output()` |
| [Angular Forms](02-angular/04-angular-forms) | Registro con grupo anidado y lista dinámica de pasatiempos | `FormBuilder`, `Validators`, `patchValue`, `FormArray` |

### 3. Patrones de diseño

| Proyecto | Qué es | Lenguaje |
| --- | --- | --- |
| [Factory Method](03-patrones-de-diseno/01-factory-method) | Exportador de informes en PDF, CSV, Excel y JSON | TypeScript |

Singleton, Builder, Prototype y Abstract Factory están hechos en C#, en el [repositorio del backend](https://github.com/Mileniumm/ProgramacionIII-Backend/tree/main/02-patrones-de-diseno).

## Proyecto integrador: ISCGB

Sistema de gestión del Instituto Superior Cura Gabriel Brochero, hecho en equipo. Yo trabajé en el frontend. Tiene sus propios repositorios:

- [ISCGB_Frontend](https://github.com/AnahidBG/ISCGB_Frontend): Angular
- [ISCGB_Backend](https://github.com/AnahidBG/ISCGB_Backend): ASP.NET Core Web API y SQL Server

## Cómo abrir cada proyecto

- **HTML, CSS y JavaScript:** abrí el archivo `.html` en el navegador. Los ejercicios con `prompt` se usan con ventanas emergentes.
- **Angular:** dentro de la carpeta del proyecto, `npm install` y después `npm start`. Se abre en `http://localhost:4200`.
- **TypeScript (Factory Method):** `npm install` y después `npm start`.

## Estructura

```
ProgramacionIII-Frontend/
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
└── 03-patrones-de-diseno/
    └── 01-factory-method/
```
