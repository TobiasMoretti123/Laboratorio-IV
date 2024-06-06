import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeladoRoutingModule } from './helado-routing.module';
import { HeladoComponent } from './helado.component';


@NgModule({
  declarations: [
    HeladoComponent
  ],
  imports: [
    CommonModule,
    HeladoRoutingModule
  ]
})
export class HeladoModule { }
