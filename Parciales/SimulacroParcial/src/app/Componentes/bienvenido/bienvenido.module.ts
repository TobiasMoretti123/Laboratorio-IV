import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './bienvenido.component';

import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { BienvenidoRoutingModule } from './bienvenido-routing.module';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from '../busqueda/busqueda.component';

@NgModule({
  declarations: [BienvenidoComponent,TablaPeliculaComponent,BusquedaComponent,DetallePeliculaComponent,TablaPeliculaComponent],
  imports: [
    CommonModule,
    BienvenidoRoutingModule
  ]
})
export class BienvenidoModule { }
