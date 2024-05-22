import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Auth, signOut } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,CommonModule,MatButtonModule,MatProgressSpinnerModule],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent{
  mostrarSpinner:boolean = false;
  mostrarUsuario:boolean = false;

  constructor(public router: Router, public auth: Auth, public snackBar: MatSnackBar){}

  Volver(){
    this.RuteoHome();
  }

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
    this.RuteoHome();
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }
  
  RuteoHome(){
    this.router.navigate(['/home']);
  }

  MostrarUsuario() {
    this.mostrarUsuario = true;
  }

  OcultarUsuario() {
    this.mostrarUsuario = false;
  }

  Chat(){
    this.router.navigate(['/chat']);
  }
}
