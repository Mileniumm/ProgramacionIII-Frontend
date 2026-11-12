import { CreadorCSV, CreadorExcel, CreadorExportador, CreadorJSON, CreadorPDF } from './creadores';
import { informeDeNotas } from './informe';

// el cliente trabaja con CreadorExportador, nunca con una clase concreta
function exportarInforme(creador: CreadorExportador): void {
  console.log(creador.generarInforme(informeDeNotas));
  console.log('------------------------------');
}

const creadores: CreadorExportador[] = [
  new CreadorPDF(),
  new CreadorCSV(),
  new CreadorExcel(),
  new CreadorJSON(), // el formato agregado después
];

for (const creador of creadores) {
  exportarInforme(creador);
}
