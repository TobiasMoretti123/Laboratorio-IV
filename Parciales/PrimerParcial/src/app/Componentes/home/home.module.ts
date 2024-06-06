import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { LoginVerificacionComponent } from '../login-verificacion/login-verificacion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from '../../Servicios/github.service';

@NgModule({
  declarations: [
    HomeComponent,
    LoginVerificacionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatLabel
  ],
  providers:[GithubService]
})
export class HomeModule { }
