import { Injectable, signal } from '@angular/core';
import { Auto } from '../models/auto';

// providedIn: 'root' -> Angular crea una sola instancia para toda la app (singleton)
// y se la da a todos los componentes que la piden con inject()
@Injectable({
  providedIn: 'root',
})
export class AutoService {
  // número al azar que se genera una sola vez, al crear el servicio.
  // si los dos componentes muestran el mismo, es porque comparten la instancia
  readonly idInstancia = Math.floor(Math.random() * 1000);

  private readonly auto = signal<Auto>({ marca: 'Toyota', modelo: 'Corolla', anio: 2022, km: 15000 });

  // los componentes pueden leer el auto pero no cambiarlo directo,
  // para cambiarlo tienen que usar los métodos del servicio
  readonly datos = this.auto.asReadonly();

  setKilometros(kilometros: number): void {
    this.auto.update((auto) => ({ ...auto, km: kilometros }));
  }

  sumarKilometros(kilometros: number): void {
    this.auto.update((auto) => ({ ...auto, km: auto.km + kilometros }));
  }
}
