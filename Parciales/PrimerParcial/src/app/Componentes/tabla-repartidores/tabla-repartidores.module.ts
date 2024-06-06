import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRepartidoresRoutingModule } from './tabla-repartidores-routing.module';
import { RepartidorService } from '../../Servicios/repartidor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablaRepartidoresComponent } from './tabla-repartidores.component';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';
import { PaisesService } from '../../Servicios/paises.service';
import { DetallePaisesComponent } from '../detalle-paises/detalle-paises.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TablaRepartidoresComponent,
    DetalleRepartidorComponent,
    DetallePaisesComponent,
  ],
  imports: [
    CommonModule,
    TablaRepartidoresRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers:[
    RepartidorService,
    PaisesService
  ]
})
export class TablaRepartidoresModule { }
