import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit{

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

  CrearCuenta(mail:string,clave:string){
    const nuevoUsuario = new Usuario(mail,clave);
    if(nuevoUsuario.mail!= '' && nuevoUsuario.clave!= '')
    {
      for (let i = 0; i < this.usuarios.length; i++) {
        if(this.usuarios[i].usuario.mail != nuevoUsuario.mail && this.usuarios[i].usuario.clave != nuevoUsuario.clave){
          this.usuarioExistente = true;
          break;
        }
      }
      if(!this.usuarioExistente){
        this.usuarios.push({usuario:nuevoUsuario});
        this.Guardar();
      }else{
        /*Pop up usuario existente*/
        console.log('usuario existente');
      }
    }else{
      /*Pop up error usuario vacio*/
      console.log('campos vacios');
    }

  }

  Ingresar(mail:string,clave:string){
    if(mail != '' && clave != ''){
      for (let i = 0; i < this.usuarios.length; i++) {
        if(mail === this.usuarios[i].usuario.mail && clave === this.usuarios[i].usuario.clave){
          this.router.navigate(['home']);
          break; 
        } 
        else 
        { 
          console.log('no se encontro usuario');
        } 
      }
    }else{
      console.log('campos vacios');
    } 
  }

  ngOnInit(): void {
    this.IniciarAplicacion();
    const usuariosStringJSON = localStorage.getItem('usuariosString');
    if(usuariosStringJSON){
        const usuariosRecuperados: Usuario[] = JSON.parse(usuariosStringJSON);
        console.log(usuariosRecuperados);
      }else{
        console.log('No se encontraron usuarios');
      }
  }

  Guardar(){
    const usuariosString = JSON.stringify(this.usuarios);
    localStorage.setItem('usuariosString',usuariosString);
  }

  IniciarAplicacion(){
    this.Guardar();
  }

}
