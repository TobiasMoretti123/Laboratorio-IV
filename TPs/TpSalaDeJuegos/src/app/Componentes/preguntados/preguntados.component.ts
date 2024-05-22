import { Component, OnInit } from '@angular/core';
import { PreguntadosService } from '../../Servicios/preguntados.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent implements OnInit {
  mostrarSpinner:boolean = false;
  mostrarImagenSpinner:boolean =false;
  pregunta: string = '';
  respuestas: any[] = [];
  respuestaCorrecta: string = '';
  dificultad:string = "";
  mostrarBotones:boolean = true;
  blockearRespuestas:boolean = false;
  urlImagen: string =""
  intentos: number = 10;
  puntos: number = 0;
  mostrarTooltip:boolean = false;
  blockearReintento:boolean = true;

  constructor(private servicio: PreguntadosService, public snackbar:MatSnackBar, public router:Router, public auth:Auth){}

  ngOnInit(): void {
  }

  ObtenerPreguntas(){
    if(this.intentos > 0){
      this.servicio.ObtenerPreguntas(this.dificultad).subscribe((r:any) =>{
        if(r.response_code === 0){
          const pregunta = r.results[0];
          this.pregunta = decodeURIComponent(pregunta.question);
          const respuestasCodificadas: string[] = pregunta.incorrect_answers.concat(pregunta.correct_answer);
          this.respuestas = respuestasCodificadas.map((respuesta:string) => decodeURIComponent(respuesta));
          this.respuestas.sort();
          this.respuestaCorrecta = decodeURIComponent(pregunta.correct_answer);
          this.ObtenerImagenes();
        }   
      })
    }
  }

  ObtenerImagenes(){
    this.servicio.ObtenerImagenes('music').subscribe((data)=>{
      this.urlImagen = data[Math.floor(Math.random() * data.length)];
    })
  }

  SeleccionarDificultad(dificultad:string){
    this.dificultad = dificultad;
    this.mostrarBotones = false;
    this.mostrarSpinner = true;
    setTimeout(() => {
      this.ObtenerPreguntas();
      setTimeout(() => {
        this.mostrarSpinner = false;
      },1000)
    },4000)
  }

  VerificarRespuesta(respuestas:string){
    if(this.intentos>0){
      if(respuestas == this.respuestaCorrecta){
        this.AbrirSnackBar('Respuesta correcta');
        this.blockearRespuestas = true;
        this.intentos--;
        this.puntos++;
        this.mostrarImagenSpinner = true;
        switch (this.dificultad) {
          case 'easy':
            this.puntos = this.puntos*1;
            break;
          case 'medium':
            this.puntos = this.puntos*2;
            break;
          case 'hard':
            this.puntos = this.puntos*3;
            break;
          default:
            break;
        }
        setTimeout(() => { 
          setTimeout(() => {
            this.mostrarImagenSpinner= false;
            this.blockearRespuestas = false;
          },1000) 
          this.ObtenerPreguntas();
        },4000)
      }else{
        this.AbrirSnackBar(`Respuesta incorrecta la Respuesta Correcta era: ${this.respuestaCorrecta}`)
        this.blockearRespuestas = true;
        this.intentos--;
        this.mostrarImagenSpinner = true;
        setTimeout(() => {
          setTimeout(() => {
            this.mostrarImagenSpinner= false;
            this.blockearRespuestas = false;
          },1000) 
          this.ObtenerPreguntas();
        },4000)
      }
      this.EstadoDeJuego(); 
    }
  }

  EstadoDeJuego(){
    if(this.intentos == 0){
      setTimeout(() => {
        this.AbrirSnackBar(`Obtuviste ${this.puntos} Puntos`);
        this.blockearRespuestas = true;
        this.blockearReintento = false;
      }, 4500);
    }
  }

  AbrirSnackBar(mensaje:any){
    this.snackbar.open(mensaje, 'Cerrar',{
      duration: 4000,
    });
  }

  Volver(){
    this.RuteoHome();
  }

  RuteoHome(){
    this.router.navigate(['/home']);
  }

  mostrarTexto() {
    this.mostrarTooltip = true;
  }

  ocultarTexto() {
    this.mostrarTooltip = false;
  }

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
    setTimeout(() => {
      this.RuteoHome();
    }, 1000);
  }

  Reintentar(){
    this.intentos = 10;
    this.puntos = 0;
    this.mostrarBotones = true;
  }
}
 