import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-verificacion-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './verificacion-login.component.html',
  styleUrl: './verificacion-login.component.css'
})
export class VerificacionLoginComponent {
  mailUsuario: string = "";
  claveUsuario: string = "";
  usuarioLogeado: string = "";
  errorDeDatos:boolean = false;
  mensaje: string = "";
  router = new Router();

  constructor(public auth: Auth){}

  Login(){
    signInWithEmailAndPassword(this.auth,this.mailUsuario,this.claveUsuario).then(()=>{
      this.router.navigate(['home']);
    }).catch((e) =>{
      this.errorDeDatos = true;

      switch (e.code){
        case "auth/invalid-email":
          this.mensaje = "Email invalido";
          break;
        case "auth/email-already-in-use":
          this.mensaje = "Email ya en uso";
          break;
        default:
          this.mensaje = e.code
          break;
      }
    })
  }

  CerrarSesion(){
    signOut(this.auth).then(() =>{
      console.log(this.auth.currentUser?.email);
    })
  }

}
