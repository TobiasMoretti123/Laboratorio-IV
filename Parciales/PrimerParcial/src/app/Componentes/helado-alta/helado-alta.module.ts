import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeladoAltaRoutingModule } from './helado-alta-routing.module';
import { HeladoAltaComponent } from './helado-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { HeladoService } from '../../Servicios/helado.service';
import { HeladoModificacionComponent } from '../helado-modificacion/helado-modificacion.component';
import { HeladoBajaComponent } from '../helado-baja/helado-baja.component';


@NgModule({
  declarations: [
    HeladoAltaComponent,
    HeladoModificacionComponent,
    HeladoBajaComponent
  ],
  imports: [
    CommonModule,
    HeladoAltaRoutingModule,
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
  providers:[HeladoService]
})
export class HeladoAltaModule { }
