import { Component, OnInit, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../Clases/usuario';
import { ErrorComponent } from '../error/error.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ErrorComponent,FormsModule,RouterLink,RouterLinkActive,RouterModule,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  mail:string = '';
  clave:string = '';
  nuevoUsuario: Usuario = new Usuario(this.mail,this.clave);
  usuarioExistente = false;
  usuarios = [{
    usuario: new Usuario('tobiasmoretti14@gmail.com','asdfghjkl')
  },{
    usuario: new Usuario('armando78@gmail.com','qwertyuiop')
  },{
    usuario: new Usuario('wenceslao90@gmail.com','zxcvbnm')
  }];

  constructor(private router:Router){}
  
  Ingresar(mail:string,clave:string){
    if(mail != '' && clave != ''){
      for (let i = 0; i < this.usuarios.length; i++) {
        if(mail === this.usuarios[i].usuario.mail && clave === this.usuarios[i].usuario.clave){
          this.router.navigate(['home']);
          break; 
        } 
        else 
        { 
          this.router.navigate(['error']);
        } 
      }
    }else{
      this.router.navigate(['error']);
    } 
  }
}
