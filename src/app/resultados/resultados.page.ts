import { Component, OnInit } from '@angular/core';
import { Resultado } from '../models/resultados.models';
import { ResultadoService } from '../services/resultado.service';
import { GLOBAL } from '../services/global.service';


@Component({
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss'],
})
export class ResultadosPage {
  public url;
  public status;
  public token;
  public identity;

  // VARIABLES DE ENCUESTAS
  public resultados: Resultado[];
  public modelResultados: Resultado;
  constructor(
    private _resultadoServices: ResultadoService,
    ) {
    this.url = GLOBAL.url;
    this.modelResultados = new Resultado('', '', '', '');
  }
  
  ngOnInit(){
    this.getResultados();
  }

  getResultados(){
    this._resultadoServices.getResultados(this.token).subscribe(response => {
      if (response.resultado) {
        this.modelResultados = response.resultado;
        this.status="Ok"
      } 
    }, error => {
      let errorMessage = <any>error;
      console.log(errorMessage);
      if (errorMessage != null)
        this.status = 'error';
    }
  }
}