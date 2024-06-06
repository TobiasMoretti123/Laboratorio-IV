import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRepartidorRoutingModule } from './alta-repartidor-routing.module';
import { AltaRepartidorComponent } from './alta-repartidor.component';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisesService } from '../../Servicios/paises.service';
import { RepartidorService } from '../../Servicios/repartidor.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    AltaRepartidorRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  providers:[PaisesService,RepartidorService]
})
export class AltaRepartidorModule { }
