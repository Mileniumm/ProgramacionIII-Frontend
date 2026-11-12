import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inventario · Panel',
    loadComponent: () => import('./inventario/panel/panel').then((m) => m.Panel),
  },
  {
    path: 'productos/:id',
    title: 'Inventario · Detalle',
    loadComponent: () =>
      import('./inventario/producto-detalle/producto-detalle').then((m) => m.ProductoDetalle),
  },
  { path: '**', redirectTo: '' },
];
