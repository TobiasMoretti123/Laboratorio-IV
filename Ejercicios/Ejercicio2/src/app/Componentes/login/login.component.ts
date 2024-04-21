import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,ErrorComponent,BienvenidoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    nombre: string = '';
    clave: string = '';
    usuario: Usuario = new Usuario(this.nombre,this.clave)
    nombreCorrecto: string = 'Tobias';
    claveCorrecta: string = '12345';
    datoValido: boolean = false;
    botonApretado:boolean = false;

    Ingresar(nombre: string,clave:string)
    {
      this.usuario.nombre = nombre;
      this.usuario.clave =  clave;
      this.botonApretado = true;
      if(this.usuario.nombre == this.nombreCorrecto && this.usuario.clave == this.claveCorrecta)
      {
        this.datoValido = true;
      }
    }
}
