import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Usuario } from './Componentes/Usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Ejericio4';
  nombre = '';
  clave = '';
  botonApretado = false;
  usuarios = [{
    nombre:'Tobias',
    clave:'12345'
  },
  {
    nombre:'Army',
    clave:'67891'
  },
  {
    nombre:'Wenxi',
    clave:'2468'
  }];
  constructor(private route:Router){}
  Ingresar(nombre:string,clave:string){

    this.Guardar();
    this.botonApretado = true;

    for (let i = 0; i < this.usuarios.length; i++) {
        if(nombre === this.usuarios[i].nombre && clave === this.usuarios[i].clave){
          this.route.navigate(['bienvenido']);
          break; 
        } 
        else
        { 
          this.route.navigate(['error']); 
        } 
    }
  }

  ngOnInit(): void {
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
  
}
