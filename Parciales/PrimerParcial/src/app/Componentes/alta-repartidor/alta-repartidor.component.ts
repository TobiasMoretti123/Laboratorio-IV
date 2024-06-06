import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from '../../Clases/repartidor';
import { RepartidorService } from '../../Servicios/repartidor.service';
import { DniValidator } from '../../Validadores/dniValidator.Validator';
import { Auth, signOut } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.css'
})
export class AltaRepartidorComponent implements OnInit{
  form!:FormGroup;
  paisSeleccionado!:any;
  repartidorCreado!:Repartidor | null;
  mostrarTooltip:boolean = false;

  constructor(private repartidorService:RepartidorService,public auth:Auth,public snackBar: MatSnackBar,private router:Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      dni: new FormControl("",[Validators.required, DniValidator()]),
      nombre: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z\\s]+$')]),
      edad: new FormControl("",[Validators.required,Validators.min(18)]),
      capacidadTransporte:new FormControl("",[Validators.required,Validators.min(0)]),
      unidadPropia: new FormControl(true) 
    },[DniValidator()])
  }

  AltaRepartidor(){
    if(this.form.valid){
      const dni = this.form.value.dni;
      const nombre = this.form.value.nombre;
      const edad = this.form.value.edad;
      const capacidadTransporte = this.form.value.capacidadTransporte;
      const paisOrigen = this.paisSeleccionado.name.common;
      const unidadPropia = this.form.value.unidadPropia;
      this.repartidorCreado = new Repartidor(dni,nombre,edad,capacidadTransporte,paisOrigen,unidadPropia)
      this.repartidorService.AltaRepartidores(this.repartidorCreado);
    }
  }

  OnSeleccionarPais(paisSeleccionado:any){
    this.paisSeleccionado = paisSeleccionado;
  }

  get dni(){
    return this.form.get('dni');
  }

  get edad(){
    return this.form.get('edad');
  }

  get nombre(){
    return this.form.get('nombre');
  }

  get capacidadTransporte(){
    return this.form.get('capacidadTransporte');
  }

  get unidadPropia(){
    return this.form.get('unidadPropia');
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
