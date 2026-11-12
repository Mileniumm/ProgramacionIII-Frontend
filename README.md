# Programación III

Proyectos y ejercicios de Programación III, de la Tecnicatura Superior en Desarrollo de Software de Quality ISAD (2026).

Están en el orden de la cursada: primero las bases de la web, después Angular y por último el backend en C#.

## Índice

### 1. Bases de la web: HTML, CSS y JavaScript

| Proyecto | Qué es | Temas |
| --- | --- | --- |
| [Página de negocio](01-bases-web/01-pagina-de-negocio) | Sitio de Fresia, un local de comida saludable en Güemes, Córdoba | HTML semántico, Flexbox, Grid, responsive, audio y video |
| [Formulario de encuesta](01-bases-web/02-formulario-de-encuesta) | Encuesta para alumnos de la materia | Formularios, tipos de input, validación nativa |
| [Control de flujos](01-bases-web/03-control-de-flujos) | Ingreso con control de edad y calculadora con menú | `if`, `switch`, `do...while`, `prompt` y `alert` |
| [Flujos de datos](01-bases-web/04-flujos-de-datos) | Los mismos ejercicios, reescritos con más validaciones | Validación de entradas, `isNaN`, `break` y `continue` |

### 2. Angular

| Proyecto | Qué es | Temas |
| --- | --- | --- |
| [Actividad front](02-angular/01-actividad-front) | Panel con dashboard e inventario, hecho en grupo | Componentes, `signal`, `computed`, `effect`, pipe `currency` |
| [Inventario](02-angular/02-inventario) | Panel de inventario con detalle de cada producto | Signals, `httpResource`, `rxResource`, rutas lazy, `input()` y `output()` |

### 3. Backend en C#

| Proyecto | Qué es | Temas |
| --- | --- | --- |
| [TP3: API REST](03-backend-csharp/01-tp3-api) | API de jugadores, equipos, entrenadores, estudiantes, cursos y actividades | ASP.NET Core, Entity Framework Core, MySQL, DAO, DTO, tests |

## Proyecto integrador: ISCGB

Sistema de gestión del Instituto Superior Cura Gabriel Brochero, hecho en equipo. Yo trabajé en el frontend. Tiene sus propios repositorios:

- [ISCGB_Frontend](https://github.com/AnahidBG/ISCGB_Frontend): Angular
- [ISCGB_Backend](https://github.com/AnahidBG/ISCGB_Backend): ASP.NET Core Web API y SQL Server

## Cómo abrir cada proyecto

- **HTML, CSS y JavaScript:** abrí el archivo `.html` en el navegador. Los ejercicios con `prompt` se usan con ventanas emergentes.
- **Angular:** dentro de la carpeta del proyecto, `npm install` y después `npm start`. Se abre en `http://localhost:4200`.
- **C#:** necesita el SDK de .NET y MySQL. Los pasos están en el README del TP.

## Estructura

```
programacion-iii/
├── 01-bases-web/
│   ├── 01-pagina-de-negocio/
│   ├── 02-formulario-de-encuesta/
│   ├── 03-control-de-flujos/
│   └── 04-flujos-de-datos/
├── 02-angular/
│   ├── 01-actividad-front/
│   └── 02-inventario/
└── 03-backend-csharp/
    └── 01-tp3-api/
```

## Para sumar un proyecto nuevo

1. Ponelo en la carpeta del bloque que corresponde, con el número que sigue. Por ejemplo: `02-angular/03-formularios`.
2. Agregale un `README.md` corto: qué es, qué temas practicaste y cómo se corre.
3. Sumá una fila al índice de este README.

---

Milena Previgliano
