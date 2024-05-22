import { Component, OnDestroy } from '@angular/core';
import { Auth,signOut } from '@angular/fire/auth';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoginVerificacionComponent } from '../login-verificacion/login-verificacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule,MatButtonModule,CommonModule,MatIconModule,LoginVerificacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mostrarTooltip:boolean = false;
  
  constructor(public auth:Auth,public router:Router,public snackBar: MatSnackBar){}

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
      panelClass: ['my-snackbar']
    });
  }
  
  mostrarTexto() {
    this.mostrarTooltip = true;
  }

  ocultarTexto() {
    this.mostrarTooltip = false;
  }

  AbrirRuta(ruta: string){
    this.router.navigate([ruta]);
  }
}
