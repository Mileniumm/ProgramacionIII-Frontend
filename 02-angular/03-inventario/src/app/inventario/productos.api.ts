import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API } from '../core/api';
import { DetalleProducto } from './producto.model';

@Injectable({ providedIn: 'root' })
export class ProductosApi {
  private readonly http = inject(HttpClient);

  obtenerDetalle(id: number): Observable<DetalleProducto> {
    return this.http.get<DetalleProducto>(API.detalle(id));
  }

  // TODO: cuando tenga backend, agregar acá los post/put/delete.
  // los resource los uso solo para leer datos, para guardar va http directo
}
