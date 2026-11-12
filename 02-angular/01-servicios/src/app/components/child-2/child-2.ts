import { Component, inject, signal } from '@angular/core';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-child-2',
  imports: [],
  templateUrl: './child-2.html',
  styleUrl: './child-2.css',
})
export class Child2 {
  protected readonly autoService = inject(AutoService);
  protected readonly error = signal('');

  protected guardar(valor: string): void {
    const kilometros = Number(valor);

    if (valor.trim() === '' || isNaN(kilometros) || kilometros < 0) {
      this.error.set('Ingresá un número de kilómetros válido');
      return;
    }

    this.error.set('');
    this.autoService.setKilometros(kilometros);
  }
}
