import { Component, computed, effect, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-inventario',
  imports: [CurrencyPipe],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {
  // 1. Estado base (signal)
  productos = signal<Producto[]>([
    { id: 1, nombre: 'Teclado mecánico', precio: 45000, stock: 10 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 18000, stock: 25 },
    { id: 3, nombre: 'Monitor 24"', precio: 210000, stock: 5 },
    { id: 4, nombre: 'Auriculares', precio: 32000, stock: 12 },
    { id: 5, nombre: 'Webcam HD', precio: 27000, stock: 8 },
  ]);

  filtro = signal('');

  // 2. Cálculos automáticos (computed)
  // Se recalculan solos cuando cambian `productos` o `filtro`.
  productosFiltrados = computed(() => {
    const texto = this.filtro().trim().toLowerCase();
    return this.productos().filter((p) => p.nombre.toLowerCase().includes(texto));
  });

  valorTotalInventario = computed(() =>
    this.productos().reduce((total, p) => total + p.precio * p.stock, 0),
  );

  // 3. Persistencia local (effect)
  // Se ejecuta cada vez que cambia la lista de productos.
  constructor() {
    effect(() => {
      const cantidad = this.productos().reduce((total, p) => total + p.stock, 0);
      localStorage.setItem('cantidadProductosInventario', String(cantidad));
    });
  }

  actualizarFiltro(evento: Event) {
    this.filtro.set((evento.target as HTMLInputElement).value);
  }

  // Reduce en 1 el stock de un producto usando .update()
  reducirStock(id: number) {
    this.productos.update((lista) =>
      lista.map((p) => (p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p)),
    );
  }

  // Aumenta en 1 el stock de un producto usando .update()
  aumentarStock(id: number) {
    this.productos.update((lista) =>
      lista.map((p) => (p.id === id ? { ...p, stock: p.stock + 1 } : p)),
    );
  }
}
