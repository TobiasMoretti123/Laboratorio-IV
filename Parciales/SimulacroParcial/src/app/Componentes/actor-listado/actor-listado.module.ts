import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListadoComponent } from './actor-listado.component';
import { ActorListadoRoutingModule } from './actor-listado-routing';



@NgModule({
  declarations: [ActorListadoComponent],
  imports: [
    CommonModule,
    ActorListadoRoutingModule
  ]
})
export class ActorListadoModule { }
