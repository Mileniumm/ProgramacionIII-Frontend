# Prototype: personajes de un videojuego

Un `Personaje` (nombre, vida, nivel y lista de habilidades) que se puede clonar. Creo un personaje original, lo clono dos veces y modifico cada copia sin que cambien el prototipo ni la otra copia.

## Cómo correrlo

```bash
dotnet run
```

Salida esperada:

```
Después de modificar los clones:
Prototipo: Guerrero | Vida: 100 | Nivel: 1 | Habilidades: Golpe, Escudo
Clon 1:    Guerrero veterano | Vida: 150 | Nivel: 1 | Habilidades: Golpe, Escudo, Carga
Clon 2:    Guerrero herido | Vida: 40 | Nivel: 1 | Habilidades: Golpe

¿Son el mismo objeto?
Prototipo y clon 1: False
Clon 1 y clon 2:    False

¿Comparten la lista de habilidades?
Prototipo y clon 1: False
Clon 1 y clon 2:    False

Después de modificar el prototipo:
Prototipo: Guerrero | Vida: 100 | Nivel: 5 | Habilidades: Golpe, Escudo, Grito de guerra
Clon 1:    Guerrero veterano | Vida: 150 | Nivel: 1 | Habilidades: Golpe, Escudo, Carga
Clon 2:    Guerrero herido | Vida: 40 | Nivel: 1 | Habilidades: Golpe
```

## Requisitos

- [x] `Personaje` implementa `IPrototype<Personaje>`.
- [x] Método `Clonar()`.
- [x] La lista de habilidades se copia bien (cada clon tiene su propia lista).
- [x] Dos clones a partir del mismo prototipo.
- [x] Se modifican la vida y las habilidades de un clon.
- [x] `ReferenceEquals` demuestra que los objetos y las listas son independientes.

## Lo más importante: la lista

`MemberwiseClone()` hace una copia superficial: copia los números y el string, pero de la lista copia solo la referencia. Si me quedaba con eso, al agregarle una habilidad al clon también aparecía en el prototipo, porque los dos apuntaban a la misma lista. Por eso en `Clonar()` le creo al clon una lista nueva con las mismas habilidades (copia profunda de la lista).

## Preguntas para defender la solución

**1. ¿Qué ocurriría si modificáramos el prototipo después de crear los clones?**
Nada en los clones: cada uno es un objeto aparte con su propia lista, así que siguen como estaban. Lo pruebo al final del `Program.cs`, donde le subo el nivel y le agrego una habilidad al prototipo. Si la copia de la lista fuera superficial, la habilidad nueva sí aparecería en los clones.

**2. ¿Qué ventajas ofrece Prototype frente a configurar cada personaje desde cero?**
Si tengo un personaje base ya configurado, lo clono y cambio solo lo que es distinto, en vez de repetir toda la configuración para cada uno. Además, el código que clona no necesita conocer cómo se arma el personaje por dentro: le pide `Clonar()` y listo.
