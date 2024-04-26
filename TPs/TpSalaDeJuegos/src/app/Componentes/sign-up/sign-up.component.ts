import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,HomeComponent,CommonModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  nuevoMail: string = '';
  nuevaClave: string = '';
  router = new Router();
  usuarioLogeado: string = '';
  errorDeDatos: boolean = false;
  mensaje: string = "";

  constructor(public auth: Auth){}

  Registrarse(){
    createUserWithEmailAndPassword(this.auth,this.nuevoMail,this.nuevaClave).then((res) =>{
      if(res.user.email !== null) this.usuarioLogeado = res.user.email;
      this.errorDeDatos = false;
      this.mensaje = "Usuario Logeado";
      this.router.navigate(['home']);
    }).catch((e)=>{
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
    });
  }
}
