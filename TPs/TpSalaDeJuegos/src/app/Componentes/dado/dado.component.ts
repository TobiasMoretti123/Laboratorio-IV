import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../Servicios/dados.service';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {
  botones:string[] = ['1','2','3','4','5','6'];
  dadoMostrado:number = 0;
  dadoTraido: any;
  valorSeleccionado: string = '';
  valorDelDado:number = 0;
  intentos: number = 10;
  puntos: number = 0;
  blockearBotones:boolean = false;
  mostrarDado:boolean = false;
  mostrarTooltip:boolean = false;
  blockearJugarDeNuevo:boolean = true;

  constructor(private servicio: DadosService, private router:Router, public auth: Auth, public snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.LanzarDado();
  }

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
  }

  mostrarTexto() {
    this.mostrarTooltip = true;
  }

  ocultarTexto() {
    this.mostrarTooltip = false;
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
      panelClass: ['my-snackbar']
    });
  }

  LanzarDado(){
    this.servicio.ObtenerDado('d6').subscribe((r)=>{
      this.dadoTraido = r;
      this.valorDelDado = this.dadoTraido.result
      this.mostrarDado = false;
    })
  }

  CompararDado(numero:string){
    this.valorSeleccionado = numero;
    if(this.valorDelDado.toString() === this.valorSeleccionado){
      this.intentos--;
      this.puntos++;
      this.AbrirSnackBar(`Se lanzo un ${this.valorDelDado}`);
    }else{
      this.intentos--;
      this.AbrirSnackBar(`Se lanzo un ${this.valorDelDado}`);
    }
    this.EstadoDelJuego();
    setTimeout(() => {
      this.LanzarDado();
      this.mostrarDado  = false;
      this.blockearBotones = false;
    }, 2000);
    this.blockearBotones = true;
    this.mostrarDado = true;
  }

  EstadoDelJuego(){
    if(this.intentos == 0){
      setTimeout(() => {
        this.AbrirSnackBar(`Obtuviste ${this.puntos} Puntos`);
        this.blockearJugarDeNuevo = false;
        this.mostrarDado  = false;
        this.blockearBotones = true;
      }, 2010);  
    }
  }

  Volver(){
    this.RuteoHome();
  }

  RuteoHome(){
    this.router.navigate(['/home']);
  }

  ReiniciarJuego(){
    this.intentos = 10;
    this.puntos = 0;
    this.mostrarDado  = false;
    this.blockearBotones = false;
  }
}
