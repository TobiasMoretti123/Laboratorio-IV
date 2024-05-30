import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorAltaComponent } from './actor-alta.component';
import { ActorAltaRoutingModule } from './actor-alta-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { PaisesService } from '../../Servicios/paises.service';

@NgModule({
  declarations: [ActorAltaComponent,TablaPaisesComponent],
  imports: [
    CommonModule,
    ActorAltaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PaisesService]
})
export class ActorAltaModule { }
