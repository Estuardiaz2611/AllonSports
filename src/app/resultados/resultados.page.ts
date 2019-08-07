import { Component, OnInit } from '@angular/core';
import { Resultado } from '../models/resultados.models';


@Component({
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss'],
})
export class ResultadosPage {
  public url;
  public status;

  // VARIABLES DE ENCUESTAS
  public resultados: Resultado[];
  public modelResultados: Resultado;
  constructor() {}

}