import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { Usuario } from './Componentes/Usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio3';
  nombre: string = '';
  clave: string = '';
  usuario: Usuario = new Usuario(this.nombre,this.clave)
  nombreCorrecto: string = 'Tobias';
  claveCorrecta: string = '12345';
  botonApretado:boolean = false;
  constructor(private router:Router){}

  Ingresar(nombre: string,clave:string)
  {
    this.usuario.nombre = nombre;
    this.usuario.clave =  clave;
    this.botonApretado = true;
    if(this.usuario.nombre == this.nombreCorrecto && this.usuario.clave == this.claveCorrecta)
    {
      this.router.navigate(['bienvenido']);
    }
    else
    {
      this.router.navigate(['error']);
    }
  }
}
