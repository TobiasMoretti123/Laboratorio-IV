import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasListadoComponent } from './peliculas-listado.component';
import { PeliculasListadoRoutingModule } from './peliculas-listado-routing.module';



@NgModule({
  declarations: [PeliculasListadoComponent],
  imports: [
    CommonModule,
    PeliculasListadoRoutingModule
  ]
})
export class PeliculasListadoModule { }
