import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// el hijo no cambia la cantidad, solo le avisa al padre cuál sería la nueva.
// no usé model() porque con [(cantidad)] estaría modificando el objeto que está adentro del signal
@Component({
  selector: 'app-selector-cantidad',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './selector-cantidad.html',
  styleUrl: './selector-cantidad.css',
})
export class SelectorCantidad {
  readonly cantidad = input.required<number>();
  readonly nombreProducto = input.required<string>();
  readonly cantidadCambio = output<number>(); // sin "on" adelante, lo recomienda la guía de estilo

  protected cambiar(delta: number): void {
    this.cantidadCambio.emit(this.cantidad() + delta);
  }
}
