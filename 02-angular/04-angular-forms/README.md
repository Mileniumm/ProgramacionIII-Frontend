# Angular Forms

Los dos ejercicios de formularios reactivos de la guía de Angular Forms, en un mismo proyecto. Cada uno es un componente y los dos se ven en la misma página.

## Cómo correrlo

```bash
npm install
npm start
```

Después entrá a `http://localhost:4200`. Lo que se envía aparece en la consola del navegador (F12), y debajo de cada formulario dejé el valor en vivo con el pipe `json` para ver cómo cambia el modelo mientras escribo.

## Ejercicio 1: registro con validaciones y grupo anidado

Componente `registro`.

- Con `FormBuilder` armo un `FormGroup` con `nombre` y `email` obligatorios (`Validators.required`) y un grupo anidado `direccion` con `calle` y `ciudad`.
- En el HTML el formulario se conecta con `[formGroup]="registroForm"`, cada campo con `formControlName` y la dirección con `formGroupName="direccion"`.
- `(ngSubmit)="onSubmit()"` imprime el valor del formulario en la consola.
- El botón "Cargar Dirección de Prueba" usa `patchValue()` y cambia solo la calle y la ciudad.
- Al email le sumé `Validators.email` para que también revise el formato. El botón Enviar se deshabilita mientras el formulario es inválido.

## Ejercicio 2: pasatiempos con FormArray

Componente `pasatiempos`.

- El formulario tiene un `FormArray` que arranca con un solo control: `this.formBuilder.array([this.formBuilder.control('')])`.
- El getter `get pasatiempos()` devuelve el arreglo como `FormArray`.
- `agregarPasatiempo()` hace `push` de un control nuevo cada vez que se toca el botón.
- En el HTML uso `formArrayName="pasatiempos"` y recorro los controles con `@for (pasatiempo of pasatiempos.controls; track $index; let i = $index)`, con `formControlName="{{ i }}"` en cada input.
- Agregué un botón para quitar un pasatiempo con `removeAt()`, que no estaba en la consigna.

## Cosas que fui encontrando

- `patchValue` y `setValue` no son lo mismo: `setValue` pide el objeto completo con todos los campos y tira error si falta alguno, `patchValue` cambia solo lo que le pasás.
- En el ejemplo de clase se usaba `[formControlName]="i"` y la consigna pide `formControlName="{{ i }}"`. Funcionan igual: con la interpolación el índice llega como texto y el `FormArray` lo encuentra igual.
- Como los formularios están tipados, puedo escribir `registroForm.controls.nombre` en el HTML sin usar `get('nombre')`.

## Estructura

```
src/app/
├── registro/      (ejercicio 1)
├── pasatiempos/   (ejercicio 2)
└── app.ts / app.html
```
