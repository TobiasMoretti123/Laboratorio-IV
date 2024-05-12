import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit{
  botones: string[] = 
  ['Q','W','E','R','T','Y','U','I','O','P',
  'A','S','D','F','G','H','J','K','L',
  'Z','X','C','V','B','N','M'];
  palabras: string [] = [
    'Mozart','Beethoven','Saglieri','Bach','Vivaldi',
    'Chopin','Pagaginini','Liszt','Brahms','Schubert',
    'Verdi','Wagner'
  ];
  palabraSeleccionada:string = "";
  palabraSeleccionadaPorLetra:string[] = [];
  letrasIncorrectas: string[] = [];
  letrasCorrectas: string[] = [];
  limiteDeErrores: number = 4;
  errores: number = 0;
  letraIngresada = '';
  esVictoria: boolean = false;
  torzo:boolean = false;
  cabeza:boolean = false;
  brazos:boolean = false;
  piernas:boolean = false;

  constructor(public snackBar:MatSnackBar,public router:Router){}

  ngOnInit(): void {
    this.palabraSeleccionada = this.palabras[Math.floor(Math.random() * this.palabras.length)].toUpperCase();
    this.palabraSeleccionadaPorLetra = this.palabraSeleccionada.split('');
  }

  IngresarLetra(letra:string){
    this.letraIngresada = letra.toUpperCase();
    if(this.palabraSeleccionada.includes(letra)){
      this.letrasCorrectas.push(letra);
    }else{
      this.letrasIncorrectas.push(letra);
      this.errores++;
    }
    this.EstadoDelJuego();
    this.ManejoErrores();
  }

  EstadoDelJuego(){
    const letrasPorDefecto = this.palabraSeleccionada.split('')
    .filter(letra => this.letrasCorrectas.includes(letra)).length;
    if(letrasPorDefecto === this.palabraSeleccionada.length){
      this.esVictoria = true;
      this.AbrirSnackBar('Felicitaciones Ganaste '+this.letrasCorrectas.length+" Puntos" 
      + '\nPreciona volver para ir al menu principal'
      );
    }
    else if (this.errores >= this.limiteDeErrores){
      this.esVictoria = false;
      this.AbrirSnackBar('Perdiste, la palabra era: '+ this.palabraSeleccionada + 
      '\nPreciona volver para ir al menu principal');
    }
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }

  Volver(){
    this.RuteoHome();
  }

  RuteoHome(){
    this.router.navigate(['/home']);
  }

  ManejoErrores(){
    switch (this.errores) {
      case 1:
        this.cabeza = true;
      break;
      case 2:
        this.torzo = true;
        break;
      case 3:
        this.brazos = true;
        break;
      case 4:
        this.piernas = true;
        break;
      default:
        break;
    }
  }
}
