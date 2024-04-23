import { Component } from '@angular/core';
import { Usuario } from '../../Clases/usuario';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,HomeComponent,CommonModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  mail:string = '';
  clave:string = '';
  nuevoUsuario: Usuario = new Usuario(this.mail,this.clave);
  usuarios = [{
    usuario: new Usuario('tobiasmoretti14@gmail.com','asdfghjkl')
  },{
    usuario: new Usuario('armando78@gmail.com','qwertyuiop')
  },{
    usuario: new Usuario('wenceslao90@gmail.com','zxcvbnm')
  }];

  constructor(private router:Router){}

  CrearCuenta(mail:string,clave:string){
    if(mail != '' && clave != '')
    {
      this.nuevoUsuario.clave = clave;
      this.nuevoUsuario.mail = mail;
      for (let i = 0; i < this.usuarios.length; i++) {
        if(this.usuarios[i].usuario.mail != this.nuevoUsuario.mail && this.usuarios[i].usuario.mail != this.nuevoUsuario.clave){
          this.router.navigate(['home']);
          break;
        }else{
          this.router.navigate(['error']);
        }  
      }
    }else{
      this.router.navigate(['error']);
    }
  }
  Guardar(){
    const usuariosString = JSON.stringify(this.usuarios);
    localStorage.setItem('usuariosString', usuariosString);
  }
}
