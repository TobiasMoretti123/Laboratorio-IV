import { Component, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GithubService } from '../../Servicios/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  mostrarTooltip:boolean = false;
  userData:any;
  
  constructor(public auth:Auth,public router:Router,public snackBar: MatSnackBar,private githubService:GithubService){}

  ngOnInit(): void {
    this.ObtenerUsuario('TobiasMoretti123');
  }

  ObtenerUsuario(username: string) {
    this.githubService.ObtenerUsuario(username).subscribe((data: any) => {
      this.userData = data;
    });
  }

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }
  
  mostrarTexto() {
    this.mostrarTooltip = true;
  }

  ocultarTexto() {
    this.mostrarTooltip = false;
  }

  AbrirRuta(ruta: string){
    this.router.navigate([ruta]);
  }
}
