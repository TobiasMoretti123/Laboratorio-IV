import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,CommonModule,MatButtonModule],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent{
  alumno = {
    nombre: 'Tobias Nahuel Moretti',
    legajo: '111024',
    dni: '41668744',
    juegoPropio: 'Explicacion Juego Propio Soon'
  };

  constructor(public router: Router){}

  Volver(){
    this.RuteoHome();
  }
  
  RuteoHome(){
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000)
  }
}
