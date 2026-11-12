import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Dashboard } from './pages/dashboard/dashboard';
import { Footer } from './components/footer/footer';
import { Inventario } from './pages/inventario/inventario';

@Component({
  selector: 'app-root',
  imports: [Header, Dashboard, Inventario, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Sigeac_front';
}
