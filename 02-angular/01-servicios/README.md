# Servicios en Angular

Práctica de servicios a partir del ejemplo que armamos en clase ([llanesdanielnicolas/Angular-Services](https://github.com/llanesdanielnicolas/Angular-Services)). En el ejemplo estaban el servicio, la interfaz `Auto` y los dos componentes hijos, pero los hijos todavía no usaban el servicio. Acá lo completé para que los dos compartan los mismos datos.

## Cómo correrlo

```bash
npm install
npm start
```

Después entrá a `http://localhost:4200`.

## Qué hace

- `AutoService` guarda un auto (marca, modelo, año y kilómetros) en un `signal`.
- `child-1` muestra los datos del auto.
- `child-2` cambia los kilómetros, escribiendo un número o con el botón de +1000 km.
- Cuando cambiás los kilómetros en `child-2`, se actualizan solos en `child-1`, porque los dos leen del mismo servicio.

## Qué practiqué

- Crear un servicio con `@Injectable({ providedIn: 'root' })`.
- Pedirlo en cada componente con `inject(AutoService)` en vez de crearlo con `new`.
- Comprobar que es un singleton: el servicio genera un número al azar una sola vez, cuando se crea, y los dos componentes muestran el mismo número. Si cada uno tuviera su propia instancia, verían números distintos.
- Separar el modelo en una interfaz (`models/auto.ts`).
- Exponer el estado como solo lectura con `asReadonly()`. Los componentes pueden leer el auto, pero para cambiarlo tienen que pasar por los métodos del servicio.

## Cosas que fui encontrando

- En el ejemplo de clase la interfaz `Auto` no tenía `export`. Funcionaba porque TypeScript la tomaba como global, pero la exporté y la importo donde la uso, que es más ordenado.
- Le cambié el nombre al servicio de `ProductService` a `AutoService`, porque lo que guarda es un auto.
- Si en vez de `providedIn: 'root'` pusiera el servicio en los `providers` de cada componente, cada hijo tendría su propia copia y dejarían de verse los cambios entre ellos.

## Estructura

```
src/app/
├── models/auto.ts
├── services/auto.service.ts
├── components/
│   ├── child-1/   (muestra el auto)
│   └── child-2/   (cambia los kilómetros)
└── app.ts / app.html
```
