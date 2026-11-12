import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// solo muestra, no sabe nada del store. el valor lo paso con ng-content
@Component({
  selector: 'app-kpi-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCard {
  readonly etiqueta = input.required<string>();
  readonly icono = input('analytics');
  readonly tono = input<'normal' | 'alerta'>('normal');
}
