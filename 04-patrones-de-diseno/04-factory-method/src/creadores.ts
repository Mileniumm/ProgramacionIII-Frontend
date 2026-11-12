import { Informe } from './informe';
import { Exportador, ExportadorCSV, ExportadorExcel, ExportadorJSON, ExportadorPDF } from './exportadores';

// el creador: tiene la lógica común y deja que las subclases elijan qué exportador crear
export abstract class CreadorExportador {
  // este es el factory method
  protected abstract crearExportador(): Exportador;

  // operación común: usa el exportador sin saber de qué clase es
  generarInforme(informe: Informe): string {
    if (informe.filas.length === 0) {
      return `El informe "${informe.titulo}" no tiene datos para exportar`;
    }

    const exportador = this.crearExportador();
    return exportador.exportar(informe);
  }
}

// creadores concretos: cada uno decide un solo formato

export class CreadorPDF extends CreadorExportador {
  protected crearExportador(): Exportador {
    return new ExportadorPDF();
  }
}

export class CreadorCSV extends CreadorExportador {
  protected crearExportador(): Exportador {
    return new ExportadorCSV();
  }
}

export class CreadorExcel extends CreadorExportador {
  protected crearExportador(): Exportador {
    return new ExportadorExcel();
  }
}

export class CreadorJSON extends CreadorExportador {
  protected crearExportador(): Exportador {
    return new ExportadorJSON();
  }
}
