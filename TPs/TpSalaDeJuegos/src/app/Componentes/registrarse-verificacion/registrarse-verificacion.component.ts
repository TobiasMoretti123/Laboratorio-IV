import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../Clases/Usuario';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrarse-verificacion',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatInputModule,MatSnackBarModule],
  templateUrl: './registrarse-verificacion.component.html',
  styleUrl: './registrarse-verificacion.component.css'
})
export class RegistrarseVerificacionComponent {
  nuevoUsuarioMail: string = "";
  nuevoUsuarioClave: string = "";
  usuarioLogeado: Usuario = new Usuario(this.nuevoUsuarioMail,this.nuevoUsuarioClave);
  banderaError:boolean = false;
  mensajeError: string = "";
  router: Router = new Router();
  mostrarTooltip:boolean = false;

  constructor(public auth:Auth,public snackBar:MatSnackBar){}

  Registrarse(){
    createUserWithEmailAndPassword(this.auth,this.nuevoUsuarioMail,this.nuevoUsuarioClave).then((respuesta)=>{
      if(respuesta.user.email !== null){
        this.usuarioLogeado = new Usuario (respuesta.user.email,this.nuevoUsuarioClave);
        this.banderaError = false;
        this.AbrirSnackBar("Bienvenido Nuevo Usuario: "+ this.usuarioLogeado.mail);
        this.RuteoHome();
      }  
    }).catch((e)=>{
      this.banderaError = true;

      switch (e.code) {
        case "auth/invalid-email":
          this.AbrirSnackBar("Email invalido");
          break;
        case "auth/email-already-in-use":
          this.AbrirSnackBar("Email ya en uso");
          break;
        case "auth/missing-password":
          this.AbrirSnackBar("Contraseña Vacia");
          break;
        case "auth/weak-password":
          this.AbrirSnackBar("La contraseña es muy corta");
          break;
        default:
          this.AbrirSnackBar(e.code);
          break;
      }
    });
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }
  
  RuteoHome(){
    this.router.navigate(['/home']);
  }

  Volver(){
    this.RuteoHome();
  }

  mostrarTexto() {
    this.mostrarTooltip = true;
  }

  ocultarTexto() {
    this.mostrarTooltip = false;
  }
}
