import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRepartidorRoutingModule } from './detalle-repartidor-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DetalleRepartidorRoutingModule,
    HttpClientModule
  ],
  providers:[]
})
export class DetalleRepartidorModule { }
