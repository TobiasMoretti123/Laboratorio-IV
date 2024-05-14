import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,CommonModule,MatButtonModule,MatProgressSpinnerModule],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent{
  mostrarSpinner:boolean = false;
  alumno = {
    nombre: 'Tobias Nahuel Moretti',
    legajo: '111024',
    dni: '41668744',
  };

  constructor(public router: Router){}

  Volver(){
    this.RuteoHome();
  }
  
  RuteoHome(){
    this.mostrarSpinner = true;
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000)
  }
}
