// los datos que se exportan, sin importar el formato
export interface Informe {
  titulo: string;
  columnas: string[];
  filas: (string | number)[][];
}

export const informeDeNotas: Informe = {
  titulo: 'Notas - Programación III',
  columnas: ['Alumno', 'Parcial 1', 'Parcial 2'],
  filas: [
    ['Ana López', 8, 9],
    ['Juan Pérez', 6, 7],
    ['Sofía Díaz', 10, 9],
  ],
};
