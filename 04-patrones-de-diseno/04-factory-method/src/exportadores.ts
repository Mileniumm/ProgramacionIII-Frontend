import { Informe } from './informe';

// el producto: todos los exportadores saben exportar, cada uno a su manera
export interface Exportador {
  exportar(informe: Informe): string;
}

// productos concretos.
// el PDF y el Excel están simulados con texto, lo que importa es la estructura del patrón

export class ExportadorPDF implements Exportador {
  exportar(informe: Informe): string {
    const lineas = informe.filas.map((fila) => fila.join('    '));
    return [`[PDF] ${informe.titulo}`, informe.columnas.join('    '), ...lineas].join('\n');
  }
}

export class ExportadorCSV implements Exportador {
  exportar(informe: Informe): string {
    const lineas = informe.filas.map((fila) => fila.join(','));
    return [informe.columnas.join(','), ...lineas].join('\n');
  }
}

export class ExportadorExcel implements Exportador {
  exportar(informe: Informe): string {
    const lineas = informe.filas.map((fila, i) => `Fila ${i + 2}: ${fila.join(' | ')}`);
    return [`[Excel] Hoja "${informe.titulo}"`, `Fila 1: ${informe.columnas.join(' | ')}`, ...lineas].join('\n');
  }
}

// el formato nuevo: para sumarlo no toqué ninguna de las clases de arriba
export class ExportadorJSON implements Exportador {
  exportar(informe: Informe): string {
    const registros = informe.filas.map((fila) =>
      Object.fromEntries(informe.columnas.map((columna, i) => [columna, fila[i]])),
    );
    return JSON.stringify({ titulo: informe.titulo, registros }, null, 2);
  }
}
