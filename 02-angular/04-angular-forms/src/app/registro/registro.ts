import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private readonly formBuilder = inject(FormBuilder);

  // el validador va como segundo elemento del array
  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    // grupo anidado: en el HTML se conecta con formGroupName="direccion"
    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: [''],
    }),
  });

  onSubmit(): void {
    console.log(this.registroForm.value);
  }

  // patchValue cambia solo lo que le paso, el nombre y el email quedan como estaban.
  // con setValue tendría que mandar el formulario completo o tira error
  cargarDireccionDePrueba(): void {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Colón 1234',
        ciudad: 'Córdoba',
      },
    });
  }
}
