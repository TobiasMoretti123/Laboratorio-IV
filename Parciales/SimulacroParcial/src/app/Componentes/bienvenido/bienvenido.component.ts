import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {

  constructor(public router:Router){}

  AbrirRuta(ruta: string){
    this.router.navigate([ruta]);
  }
}
