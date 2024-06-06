import { Component } from '@angular/core';
import { Usuario } from '../../Clases/usuario';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-verificacion',
  templateUrl: './login-verificacion.component.html',
  styleUrl: './login-verificacion.component.css'
})
export class LoginVerificacionComponent {
  usuarioMail:string = "";
  usuarioClave:string = "";
  usuarioRole:string="";
  mensajeError:string = "";
  esAdmin: boolean = false;

  usuarioLogeado: Usuario = new Usuario (this.usuarioMail,this.usuarioClave);

  constructor(public auth:Auth,public snackBar:MatSnackBar,public router:Router){}

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

  IngresoRapido(esAdmin:boolean){
    if(esAdmin == true){
      this.usuarioMail = "tobiasmoretti14@gmail.com";
      this.usuarioClave = "asdfghjkl";
    }else{
      this.usuarioMail = "juan@gmail.com";
      this.usuarioClave = "qwertyuiop";
    }
    
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
