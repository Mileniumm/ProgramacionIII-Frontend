// id en number porque en el back va a ser long (como en el TP)
export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  cantidad: number;
}

export interface Movimiento {
  fecha: string;
  tipo: 'ingreso' | 'egreso';
  cantidad: number;
  motivo: string;
}

// esto lo pido solo cuando entro al detalle de un producto
export interface DetalleProducto {
  id: number;
  descripcion: string;
  proveedor: string;
  ubicacion: string;
  movimientos: Movimiento[];
}
