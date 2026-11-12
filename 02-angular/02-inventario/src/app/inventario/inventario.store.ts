import { httpResource } from '@angular/common/http';
import { Injectable, computed, effect, signal } from '@angular/core';

import { API } from '../core/api';
import { Producto } from './producto.model';

@Injectable({ providedIn: 'root' })
export class InventarioStore {
  // antes lo hacía con http.get().subscribe() y guardaba en una variable,
  // pero sin zone.js la vista no se actualizaba. con httpResource queda todo en signals
  private readonly productosResource = httpResource<Producto[]>(() => API.productos(), {
    defaultValue: [],
  });

  readonly estado = this.productosResource.status;
  readonly cargando = this.productosResource.isLoading;
  readonly error = this.productosResource.error;

  // ojo: value() tira error si el resource falló, por eso pregunto hasValue() antes
  readonly productos = computed(() =>
    this.productosResource.hasValue() ? this.productosResource.value() : [],
  );

  private readonly umbral = signal(5);
  readonly umbralStockBajo = this.umbral.asReadonly();

  readonly totalProductos = computed(() => this.productos().length);

  readonly totalUnidades = computed(() =>
    this.productos().reduce((acc, p) => acc + p.cantidad, 0),
  );

  readonly valorTotal = computed(() =>
    this.productos().reduce((acc, p) => acc + p.precio * p.cantidad, 0),
  );

  readonly productosStockBajo = computed(() =>
    this.productos().filter((p) => p.cantidad < this.umbral()),
  );

  constructor() {
    // el effect tiene que ir en el constructor (necesita contexto de inyección).
    // lo uso solo para loguear, no cambio ningún signal adentro
    effect(() => {
      const criticos = this.productosStockBajo();
      if (criticos.length > 0) {
        console.warn(
          `[Inventario] ${criticos.length} producto(s) con stock bajo:`,
          criticos.map((p) => `${p.nombre} (${p.cantidad})`).join(', '),
        );
      }
    });
  }

  // mutate() ya no existe desde angular 17, uso update() y devuelvo un array nuevo.
  // si modifico el array original el signal no se entera (compara referencias)
  cambiarCantidad(id: number, cantidad: number): void {
    const nueva = Math.max(0, cantidad); // que no quede negativo
    this.productosResource.value.update((lista) =>
      lista.map((p) => (p.id === id ? { ...p, cantidad: nueva } : p)),
    );
  }

  eliminarProducto(id: number): void {
    this.productosResource.value.update((lista) => lista.filter((p) => p.id !== id));
  }

  cambiarUmbral(valor: number): void {
    // si el input queda vacío llega NaN, y NaN >= 0 da false
    if (valor >= 0) {
      this.umbral.set(valor);
    }
  }

  // vuelve a pedir los datos. se pierden los cambios porque todavía no los guardo en ningún lado
  recargar(): void {
    this.productosResource.reload();
  }

  buscarPorId(id: number): Producto | undefined {
    return this.productos().find((p) => p.id === id);
  }
}
