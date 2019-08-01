import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { Resultado } from '../models/resultados.models';

@Injectable()

export class ResultadoService {
  public url: string;
  public identity;
  public token;
  public resultado;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getResultados(token): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Authorization', token);
    return this._http.get(`${this.url}listar-resultado`, { headers: headers });
  }

  getResultado(id, token): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Authorization', token);
    return this._http.get(`${this.url}listar-resultado/${id}`, { headers: headers });
  }

  addResultado(resultados: Resultado, token): Observable<any> {
    let params = JSON.stringify(resultados);
    let headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Authorization', token);
    return this._http.post(`${this.url}registrar-resultado`, params, { headers: headers })
  }

  updateResultado(resultados: Resultado, token): Observable<any> {
    let params = JSON.stringify(resultados);
    let headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Authorization', token);
    return this._http.put(`${this.url}editar-resultado/${resultados._id}`, params, { headers: headers })
  }

  deleteResultado(id, token): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Authorization', token);
    return this._http.delete(`${this.url}eliminar-resultado/${id}`, { headers: headers })
  }

  getResultadoOnSessionStorage() {
    var resultado2 = JSON.parse(sessionStorage.getItem('resultado'));
    if (resultado2 != "undefined")
      this.resultado = resultado2;
    else
      this.resultado = null;
    return this.resultado;
  }
}

