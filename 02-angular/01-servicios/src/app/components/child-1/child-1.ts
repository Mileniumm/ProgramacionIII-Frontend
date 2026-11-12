import { Component, inject } from '@angular/core';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-child-1',
  imports: [],
  templateUrl: './child-1.html',
  styleUrl: './child-1.css',
})
export class Child1 {
  // no hago new AutoService(): se lo pido a Angular
  protected readonly autoService = inject(AutoService);
}
