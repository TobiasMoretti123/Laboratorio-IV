import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pelicula } from '../Clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DetallePeliculaService {
  private peliculaDetalleSubject: BehaviorSubject<Pelicula | null> = new BehaviorSubject<Pelicula | null>(null);

  mostrarDetalles(pelicula: Pelicula): void {
    this.peliculaDetalleSubject.next(pelicula);
  }

  obtenerDetalle(): Observable<Pelicula | null> {
    return this.peliculaDetalleSubject.asObservable();
  }
}