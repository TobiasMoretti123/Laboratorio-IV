import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../Clases/Usuario';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
   MatSnackBar, 
   MatSnackBarConfig,
   MatSnackBarModule
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-verificacion',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatInputModule,MatSnackBarModule],
  templateUrl: './login-verificacion.component.html',
  styleUrl: './login-verificacion.component.css',
})
export class LoginVerificacionComponent {
  usuarioMail:string = "";
  usuarioClave:string = "";
  mensajeError:string = "";

  usuarioLogeado: Usuario = new Usuario (this.usuarioMail,this.usuarioClave);
  router: Router = new Router();

  constructor(public auth:Auth,public snackBar:MatSnackBar){}

  Login(){
    signInWithEmailAndPassword(this.auth,this.usuarioMail,this.usuarioClave).then((respuesta)=>{
      if(respuesta.user.email != null){
        this.usuarioLogeado = new Usuario(respuesta.user.email,this.usuarioClave);
        this.AbrirSnackBar("Bienvenido: "+ this.usuarioLogeado.mail);
        this.RuteoHome();
      }
    }).catch((e)=>{
      switch (e.code) {
        case "auth/invalid-email":
          this.AbrirSnackBar("Email Invalido");
          break;
        case "auth/missing-password":
          this.AbrirSnackBar("Contraseña Vacia");
          break;
        case "auth/invalid-credential":
          this.AbrirSnackBar("Email Invalido");
          break;
        default:
          this.AbrirSnackBar(e.code);
          break;
      }
    });
  }

  IngresoRapido(){
    this.usuarioMail = "tobiasmoretti14@gmail.com";
    this.usuarioClave = "asdfghjkl";
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar', {
      duration:2000,
      panelClass: ['custom-snackbar']
    });
  }
  
  RuteoHome(){
    this.router.navigate(['/home']);
  }
}
