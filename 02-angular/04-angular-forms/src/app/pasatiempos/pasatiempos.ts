import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pasatiempos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pasatiempos.html',
  styleUrl: './pasatiempos.css',
})
export class Pasatiempos {
  private readonly formBuilder = inject(FormBuilder);

  // el FormArray arranca con un solo campo vacío
  pasatiemposForm = this.formBuilder.group({
    pasatiempos: this.formBuilder.array([this.formBuilder.control('')]),
  });

  // getter para no repetir el get('pasatiempos') as FormArray en el HTML
  get pasatiempos(): FormArray {
    return this.pasatiemposForm.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.formBuilder.control(''));
  }

  // esto no lo pedía la consigna, pero sin poder borrar la lista solo crece
  quitarPasatiempo(indice: number): void {
    this.pasatiempos.removeAt(indice);
  }

  onSubmit(): void {
    console.log(this.pasatiemposForm.value);
  }
}
