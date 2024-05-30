import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaAltaRoutingModule } from './peliculas-alta-routing.module';
import { PeliculasAltaComponent } from './peliculas-alta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from '../../Servicios/paises.service';
import { DetalleActorComponent } from '../detalle-actor/detalle-actor.component';
import { TablaActorComponent } from '../tabla-actor/tabla-actor.component';

@NgModule({
  declarations: [PeliculasAltaComponent,DetalleActorComponent,TablaActorComponent],
  imports: [
    CommonModule,
    PeliculaAltaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    PaisesService,
    
  ]
})
export class PeliculaAltasModule { }