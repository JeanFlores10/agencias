import { Injectable } from '@angular/core';
import { Agency } from '../models/agency';
import { AGENCY } from '../mock-agency';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AgenciaService {

  private agenciasURL = 'api/agencias';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private _http: HttpClient) { }



  getAgencias(): Observable<Agency[]> {
    return this._http.get<Agency[]>(this.agenciasURL)
  }

  updateAgencia(agencia: Agency): Observable<any> {
    return this._http.put(this.agenciasURL, agencia, this.httpOptions);
  }
}