import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  ObtenerPaises(): Observable<any>{
    return this.http.get<any[]>('https://restcountries.com/v3.1/all')
    .pipe(map(paises => paises.sort((a,b) => {
        if (a.name.common < b.name.common) {
          return -1;
        } else if (a.name.common > b.name.common) {
          return 1;
        } else {
          return 0;
        }
      })));
  }
}
