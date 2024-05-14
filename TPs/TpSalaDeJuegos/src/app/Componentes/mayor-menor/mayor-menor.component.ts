import { Component, OnInit } from '@angular/core';
import { MayorMenorAPIService } from '../../Servicios/mayor-menor-api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent implements OnInit {
  idMazo:string = "";
  cartas: any[] = [];
  valorDeCartas: string [] = [];
  esMayor: boolean = true;
  conteoErrores: number = 0;
  conteoAciertos: number = 0;
  desabilitarBotones: boolean = false;
  mostrarSegundaCarta: boolean = false;
  constructor(private servicio: MayorMenorAPIService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.servicio.ObtenerUnNuevoMazo().subscribe((r:any) =>{
      this.idMazo = r.deck_id;
      this.SacarCartas();
    })
  }

  SacarCartas(){
    this.servicio.ObtenerCartas(this.idMazo,2).subscribe((r:any) =>{
      this.cartas = r.cards
    });
  }

  CompararCartas(esMayor: boolean): void {
    this.valorDeCartas = [];
  
    this.cartas.forEach((carta: any) => {
      this.valorDeCartas.push(carta.value);
    });
  
    if ((esMayor && this.valorDeCartas[1] >= this.valorDeCartas[0]) ||
        (!esMayor && this.valorDeCartas[1] <= this.valorDeCartas[0])) {
      this.esMayor = true;
      this.conteoAciertos++;
      this.mostrarSegundaCarta = true;
      this.AbrirSnackBar(`adivinaste intentos restantes para ganar: ${3 - this.conteoAciertos}`);
    } else {
      this.esMayor = false;
      this.mostrarSegundaCarta = true;
      this.conteoErrores++;
      this.AbrirSnackBar(`No adivinaste intentos restantes: ${5 - this.conteoErrores}`);
    }
    
    this.EstadoDelJuego();
      setTimeout(() => {
        this.mostrarSegundaCarta=false;
        this.SacarCartas();
      }, 2000)
  }

  EstadoDelJuego(){
    if(this.conteoErrores == 5){
      this.AbrirSnackBar(`Perdiste, pero adivinaste ${this.conteoAciertos} 
      \nEsa cantidad se agrego a tu puntuacion\nPresiona volver para ir al menu principal`);
      this.desabilitarBotones = true;
    }else if (this.conteoAciertos == 3){
      this.desabilitarBotones = true;
      this.AbrirSnackBar(`Ganaste ${this.conteoAciertos} Puntos\nPresiona volver para ir al menu principal`);
    }
  }

  Volver(){
    this.RuteoHome();
  }

  RuteoHome(){
    this.router.navigate(['/home']);
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 4000,
    });
  }
}
