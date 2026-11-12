# Builder: pedidos de una tienda

Una tienda arma pedidos con un cliente, una lista de productos, un tipo de envío y un descuento opcional. Con `PedidoBuilder` los pedidos se arman paso a paso, sin un constructor con muchos parámetros.

## Cómo correrlo

```bash
dotnet run
```

Crea dos pedidos distintos, los muestra y después intenta crear uno sin productos para mostrar la validación.

## Archivos

- `Pedido.cs`: el resultado. Tiene cliente, productos, envío y descuento, todos de solo lectura.
- `PedidoBuilder.cs`: guarda los datos de a uno y crea el pedido en `Build()`.
- `TipoEnvio.cs`: `Estandar` o `Express`.
- `Program.cs`: arma los dos pedidos.

## Requisitos

- [x] Clase `Pedido` con cliente, productos y tipo de envío.
- [x] `PedidoBuilder` con métodos que devuelven `this`.
- [x] Productos agregados de a uno con `AgregarProducto()`.
- [x] Envío estándar o express (`ConEnvioEstandar()` y `ConEnvioExpress()`).
- [x] `Build()` devuelve el pedido final.
- [x] Dos pedidos diferentes sin usar un constructor con muchos parámetros.
- [x] Validación de cliente y de al menos un producto.

Además agregué `ConDescuento()`, porque la situación hablaba de descuentos opcionales.

## Preguntas de reflexión

**1. ¿Qué responsabilidad tiene `PedidoBuilder` que no tiene `Pedido`?**
La de construirlo: juntar los datos de a poco, validar que el pedido esté completo y recién ahí crearlo. `Pedido` solo representa un pedido que ya está armado.

**2. ¿Por qué los métodos devuelven `this`?**
Para poder encadenar las llamadas (`.ParaCliente(...).AgregarProducto(...).ConEnvioExpress()`). Cada método devuelve el mismo builder y se sigue configurando sobre él. Queda una interfaz fluida que se lee casi como una oración.

**3. ¿Qué ventaja tiene `Build()` frente a devolver el objeto directamente después de cada paso?**
Que el pedido existe recién cuando está completo y validado. Si se devolviera en cada paso, podría usarse un pedido a medio armar, por ejemplo sin productos. `Build()` es el único punto donde se valida todo junto.

**4. ¿Qué ocurre si intentamos construir un pedido sin productos?**
`Build()` lanza una `InvalidOperationException` con el mensaje "El pedido necesita al menos un producto." y el pedido no se crea. En `Program.cs` lo atrapo con `try/catch` y muestro el mensaje.

**5. ¿Qué patrón aplicarías si, además, necesitaras garantizar una instancia compartida de un servicio?**
Singleton, como en el ejercicio de `ConfiguracionSistema`: constructor privado y una única instancia accesible desde una propiedad estática.
