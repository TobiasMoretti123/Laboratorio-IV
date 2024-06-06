import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  ObtenerUsuario(username: string): Observable<any> {
    const apiUrl = `https://api.github.com/users/${username}`;
    return this.http.get(apiUrl);
  }
}
