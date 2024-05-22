import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosService } from '../../Servicios/preguntados.service';
import { HttpClientModule } from '@angular/common/http';
import { PreguntadosComponent } from './preguntados.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [PreguntadosComponent],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinner,
  ],
  providers:[
    PreguntadosService
  ] 
})
export class PreguntadosModule { }
