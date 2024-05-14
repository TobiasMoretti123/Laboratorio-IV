import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MayorMenorAPIService {

  private apiUrl = 'https://deckofcardsapi.com/api/deck';

  constructor(private http: HttpClient) { }

  ObtenerUnNuevoMazo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/`);
  }

  ObtenerCartas(deckId: string, count: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/draw/?count=${count}`);
  }
}
