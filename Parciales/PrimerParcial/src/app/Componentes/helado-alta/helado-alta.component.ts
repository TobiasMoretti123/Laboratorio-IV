import { Component , Output, EventEmitter, OnInit} from '@angular/core';
import { Helado } from '../../Clases/helado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoHeladoValidator } from '../../Validadores/tipoHeladoValidator.Validator';
import { HeladoService } from '../../Servicios/helado.service';
import { Auth, signOut } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helado-alta',
  templateUrl: './helado-alta.component.html',
  styleUrl: './helado-alta.component.css'
})
export class HeladoAltaComponent implements OnInit {
  @Output() heladoCreado = new EventEmitter<Helado>();
  helado:Helado | null =  null;
  form!:FormGroup;
  mostrarTooltip:boolean = false;
  mostrarBotones:boolean = false;
  mostrarBaja:boolean = false;
  mostrarModificacion:boolean = false;

  constructor(public auth:Auth,public heladoService:HeladoService,public snackBar:MatSnackBar,public router:Router){}

  AltaHelado() {
    if(this.form.valid){
      const sabor = this.form.value.sabor;
      const tipo = this.form.value.tipo;
      const precio = this.form.value.precio;
      const peso = this.form.value.peso;
      this.helado = new Helado(sabor,tipo,precio,peso)
      this.heladoService.AltaHelado(this.helado);
      this.heladoCreado.emit(this.helado);
      this.mostrarBotones = true;
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sabor: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z\\s]+$')]),
      tipo: new FormControl("",[Validators.required,TipoHeladoValidator()]),
      precio: new FormControl("",[Validators.required,Validators.min(0)]),
      peso:new FormControl("",[Validators.required,Validators.min(250),Validators.max(1000)]),
    },[TipoHeladoValidator()])
  }

  MostrarBaja(){
    this.mostrarBaja = true;
  }

  MostrarModificacion(){
    this.mostrarModificacion = true;
  }

  get sabor(){
    return this.form.get('sabor');
  }

  get precio(){
    return this.form.get('precio');
  }

  get tipo(){
    return this.form.get('tipo');
  }

  get peso(){
    return this.form.get('peso');
  }

  CancelarModificacion(){
    this.mostrarModificacion = false;
  }

  CancelarBaja(){
    this.mostrarBaja = false;
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
