# Factory Method: exportador de informes académicos

El sistema tiene que exportar informes en PDF, CSV y Excel. Lo resolví en TypeScript con el patrón Factory Method.

## Cómo correrlo

```bash
npm install
npm start
```

Exporta el mismo informe de notas en los cuatro formatos y lo muestra en la consola. El PDF y el Excel están simulados con texto: lo que importa es la estructura del patrón, no generar el archivo real.

## Cómo está armado

| Pieza del patrón | Clase | Archivo |
| --- | --- | --- |
| Producto | interfaz `Exportador`, con `exportar()` | `exportadores.ts` |
| Productos concretos | `ExportadorPDF`, `ExportadorCSV`, `ExportadorExcel`, `ExportadorJSON` | `exportadores.ts` |
| Creador | clase abstracta `CreadorExportador` | `creadores.ts` |
| Factory Method | `crearExportador()` | `creadores.ts` |
| Creadores concretos | `CreadorPDF`, `CreadorCSV`, `CreadorExcel`, `CreadorJSON` | `creadores.ts` |
| Operación común | `generarInforme()`: pide un exportador y lo usa sin saber de qué clase es | `creadores.ts` |

El formato JSON lo agregué al final para probar que se puede sumar un formato nuevo sin tocar nada de lo que ya estaba: solo hizo falta `ExportadorJSON` y `CreadorJSON`.

## Preguntas para defender el diseño

**1. ¿Por qué la clase cliente no crea directamente un `ExportadorPDF`?**
Porque quedaría atada a esa clase concreta. Si mañana hay que exportar en CSV, habría que cambiar el código del cliente. Con el patrón, el cliente (`exportarInforme` en `main.ts`) recibe un `CreadorExportador` y no sabe ni le importa qué formato sale.

**2. ¿Cuál es el Factory Method en la solución?**
`crearExportador()`, el método abstracto de `CreadorExportador` que cada creador concreto implementa devolviendo su exportador.

**3. ¿Qué diferencia existe entre el producto y el creador?**
El producto es el objeto que hace el trabajo: el exportador, que convierte el informe a un formato. El creador es el que decide qué producto crear y tiene la lógica común (`generarInforme`), que funciona igual para cualquier formato.

**4. ¿Qué clases necesitamos agregar para incorporar un exportador JSON?**
Dos: el producto `ExportadorJSON`, que implementa `Exportador`, y el creador `CreadorJSON`, que extiende `CreadorExportador` y devuelve un `ExportadorJSON` en `crearExportador()`. No se modifica ninguna clase existente.

**5. ¿Qué ventaja ofrece este diseño frente a un `switch` centralizado?**
Con un `switch` todos los formatos están en un mismo lugar, y cada formato nuevo obliga a abrir y modificar ese código, con el riesgo de romper los que ya andaban. Con Factory Method cada formato está en su propia clase y se agregan formatos nuevos sin tocar los anteriores (principio abierto/cerrado).
