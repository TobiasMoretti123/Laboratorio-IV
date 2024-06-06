import { Component, EventEmitter, Output } from '@angular/core';
import { Repartidor } from '../../Clases/repartidor';
import { RepartidorService } from '../../Servicios/repartidor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-repartidores',
  templateUrl: './tabla-repartidores.component.html',
  styleUrl: './tabla-repartidores.component.css'
})
export class TablaRepartidoresComponent {
  repartidores: Repartidor[] = [];
  selectedRepartidor!: Repartidor | null;
  mostrarDetalles:boolean = false;
  mostrarTooltip:boolean = false;

  constructor(private repartidorService: RepartidorService,public snackBar:MatSnackBar,public auth:Auth,private router:Router) {}

  ngOnInit(): void {
    this.repartidorService.LeerRepartidores();
    this.repartidorService.repartidores?.subscribe(r => {
      this.repartidores = r;
    });
  }

  MostrarDetalles(repartidor:Repartidor){
    this.mostrarDetalles = true;
    this.selectedRepartidor = repartidor
  }

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
    this.AbrirRuta('/home');
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
