import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesRoutingModule } from './tabla-paises-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from '../../Servicios/paises.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablaPaisesRoutingModule,
    HttpClientModule
  ],
  providers:[
    PaisesService
  ]
})
export class TablaPaisesModule { }
