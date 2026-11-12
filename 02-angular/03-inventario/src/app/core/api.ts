// por ahora los datos salen de los json de public/api
// cuando arme la api en .net (como en el TP) cambio las urls solo acá
const BASE = '/api';

export const API = {
  productos: () => `${BASE}/productos.json`,
  detalle: (id: number) => `${BASE}/productos/${id}.json`,
};
