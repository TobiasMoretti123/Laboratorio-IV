import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Usuario } from '../../Clases/usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent,RouterLink,RouterLinkActive,MatInputModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    const usuariosStringJSON = localStorage.getItem('usuariosString');
    if(usuariosStringJSON){
        const usuariosRecuperados: Usuario[] = JSON.parse(usuariosStringJSON);
        console.log(usuariosRecuperados);
      }else{
        console.log('No se encontraron usuarios');
      }
  }

  Ingresar(){
    this.router.navigate(['login']);
  };

  Registrarse(){
    this.router.navigate(['signUp']);
  }

  QuienSoy(){
    this.router.navigate(['quien-soy']);
  }
}
