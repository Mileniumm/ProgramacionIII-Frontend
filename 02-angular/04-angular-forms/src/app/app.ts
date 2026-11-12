import { Component } from '@angular/core';
import { Registro } from './registro/registro';
import { Pasatiempos } from './pasatiempos/pasatiempos';

@Component({
  selector: 'app-root',
  imports: [Registro, Pasatiempos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
