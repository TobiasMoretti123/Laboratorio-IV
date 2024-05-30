import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';


@NgModule({
  declarations: [PeliculasComponent],
  imports: [
    CommonModule,
    PeliculaRoutingModule
  ]
})
export class PeliculaModule { }