import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { InventarioStore } from '../inventario.store';
import { ProductosApi } from '../productos.api';

@Component({
  selector: 'app-producto-detalle',
  imports: [
    CurrencyPipe,
    DatePipe,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
  ],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  private readonly api = inject(ProductosApi);
  private readonly store = inject(InventarioStore);

  protected readonly columnas = ['fecha', 'tipo', 'motivo', 'cantidad'];

  // viene del :id de la ruta. la url trae string, numberAttribute lo pasa a number
  readonly id = input.required({ transform: numberAttribute });

  protected readonly umbral = this.store.umbralStockBajo;

  // precio y stock los saco del store así coinciden con lo que cambié en el panel
  protected readonly producto = computed(() => this.store.buscarPorId(this.id()));

  // en el video usaban loader en rxResource pero en la versión nueva es stream.
  // cuando cambia el id vuelve a pedir solo. lo declaro acá y no en el constructor
  // porque si no tira el error TS2564
  protected readonly detalle = rxResource({
    params: () => this.id(),
    stream: ({ params: id }) => this.api.obtenerDetalle(id),
  });
}
