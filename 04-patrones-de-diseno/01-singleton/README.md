# Singleton: administrador de configuración

Clase `ConfiguracionSistema` que cumple el patrón Singleton y comparte el nombre de la aplicación entre dos módulos (ventas y reportes).

## Cómo correrlo

```bash
dotnet run
```

Salida esperada:

```
Se creó la configuración (este mensaje sale una sola vez)
¿Ventas y Reportes usan el mismo objeto? True

Nombre antes del cambio: Sistema de gestión
Ventas ve:   Gestión Académica ISCGB
Reportes ve: Gestión Académica ISCGB
```

## Requisitos

- [x] Constructor privado.
- [x] Instancia estática privada (`private static readonly ... instance`).
- [x] Propiedad estática pública `Instance`.
- [x] Dos variables que acceden a `Instance` (`configVentas` y `configReportes`).
- [x] `ReferenceEquals` comprueba que apuntan al mismo objeto.
- [x] El cambio de `NombreAplicacion` desde una referencia se ve desde la otra.

## Por qué lo hice así

La instancia se crea con `static readonly`. C# garantiza que el inicializador estático corre una sola vez, aunque dos hilos usen la clase al mismo tiempo, así que no hace falta un `lock`. Además le puse `sealed` a la clase para que nadie pueda heredarla.

## Preguntas de reflexión

**1. ¿Qué ocurriría si el constructor fuera público?**
Cualquier parte del código podría hacer `new ConfiguracionSistema()` y tener su propia configuración. Ventas podría cambiar el nombre de la aplicación y reportes seguiría viendo el viejo, porque serían dos objetos distintos.

**2. ¿Qué garantía del patrón estaríamos perdiendo?**
La de que exista una sola instancia. Ya no habría un único objeto compartido por toda la aplicación, sino tantos como `new` se hagan.
