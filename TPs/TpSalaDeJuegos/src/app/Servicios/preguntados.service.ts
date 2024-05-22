import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  private preguntasApi = 'https://opentdb.com/api.php';
  private imagenesApi = 'https://api.pexels.com/v1';
  private imagenApiKey= 'U6FWFzzQItjBVRovp1i3nQiuOjygxNIesmHrgo01hVZ6Rx3xkhxH4nKn';

  constructor(private http: HttpClient) { }

  ObtenerPreguntas(dificultad:string): Observable<any>{
    return this.http.get<any[]>(`${this.preguntasApi}?amount=1&category=12&difficulty=${dificultad}&type=multiple&encode=url3986`);
  }

  ObtenerImagenes(query:string){
    const headers = new HttpHeaders({
      'Authorization': this.imagenApiKey
    })
    return this.http.get<any>(`${this.imagenesApi}/search?query=${query}`, { headers }).pipe(
      map((data) => {
        return data.photos.map((photo: { src: { original: any; }; }) => photo.src.original);
      })
    );
  }
}
