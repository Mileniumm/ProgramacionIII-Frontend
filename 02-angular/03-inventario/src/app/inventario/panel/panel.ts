import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

import { InventarioStore } from '../inventario.store';
import { KpiCard } from '../kpi-card/kpi-card';
import { SelectorCantidad } from '../selector-cantidad/selector-cantidad';

@Component({
  selector: 'app-panel',
  imports: [
    CurrencyPipe,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
    KpiCard,
    SelectorCantidad,
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  protected readonly store = inject(InventarioStore);

  protected readonly columnas = ['nombre', 'categoria', 'precio', 'stock', 'subtotal', 'acciones'];
  // el footer junta las 4 primeras columnas en una sola celda (colspan)
  protected readonly columnasPie = ['nombre', 'subtotal', 'acciones'];

  protected cambiarUmbral(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    this.store.cambiarUmbral(campo.valueAsNumber);
  }
}
