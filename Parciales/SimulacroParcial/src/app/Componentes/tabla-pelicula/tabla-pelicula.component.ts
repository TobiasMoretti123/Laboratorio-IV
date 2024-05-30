import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../Clases/pelicula';
import { PeliculaBaseService } from '../../Servicios/peliculas-base.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  msotrarPeliculas:boolean=false;
  peliculas: Pelicula[] = [];
  peliculaSeleccionada: Pelicula | null = null;

  constructor(private peliculaService: PeliculaBaseService) {}

  ngOnInit(): void {
    this.peliculaService.LeerPeliculas();
    this.peliculaService.peliculas?.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
  }

  mostrarDetalle(pelicula: Pelicula): void {
    this.msotrarPeliculas = true;
    this.peliculaSeleccionada = pelicula;
  }
}