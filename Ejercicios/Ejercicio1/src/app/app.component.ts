import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio1';
  edad1: number = 0;
  edad2: number = 0;
  suma: number = 0;
  promedio: number = 0;

  RealizarOperacion(numero1: number, numero2: number)
  {
    this.edad1 = numero1;
    this.edad2 = numero2;
    this.suma = numero1 + numero2;
    this.promedio = this.suma/2;
  }

  Limpiar()
  {
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
