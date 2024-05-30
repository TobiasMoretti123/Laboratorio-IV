import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TipoPeliculaValidator } from '../../Validadores/tipoPelicula.validator';
import { Router } from '@angular/router';
import { Actor } from '../../Clases/actor';
import { PeliculaBaseService } from '../../Servicios/peliculas-base.service';
import { Pelicula } from '../../Clases/pelicula';
import { FotoPeliculaValidator } from '../../Validadores/fotoPelicula.Validator';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrl: './peliculas-alta.component.css'
})
export class PeliculasAltaComponent implements OnInit {
  form!:FormGroup
  actorSeleccionado!: Actor | null;
  peliculaCreada!:Pelicula | null;
  inputActor:boolean = false;

  constructor(private router:Router,public peliculaService:PeliculaBaseService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombrePelicula: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z\\s]+$')]),
      cantidadPublico: new FormControl("", [Validators.required,Validators.min(0)]),
      fotoPelicula: new FormControl("",[Validators.required,FotoPeliculaValidator()]),
      tipo: new FormControl ("",[Validators.required,TipoPeliculaValidator()]),
      actor: new FormControl("")
    }, [TipoPeliculaValidator(),FotoPeliculaValidator()])
  }

  AltaPelicula(){
    if(this.form.valid){
      const nombre = this.form.value.nombrePelicula;
      const cantidad = this.form.value.cantidadPublico;
      const fotoPelicula = this.form.value.fotoPelicula;
      const tipo = this.form.value.tipo;
      const actor = this.form.value.actor
      this.peliculaService.AltaPelicula(nombre,cantidad,fotoPelicula,Timestamp.now(),tipo,4,actor);
    }
  }

  MostrarActores(){
    this.router.navigate(['/tablaActor']);
  }

  OnSeleccionarActor(actorSeleccionado:Actor){
    this.actorSeleccionado = new Actor(actorSeleccionado.nombre,actorSeleccionado.edad,actorSeleccionado.nacionalidad);
    this.form.value.actor = this.actorSeleccionado;
  }

  get nombrePelicula(){
    return this.form.get('nombrePelicula');
  }

  get cantidadPublico(){
    return this.form.get('cantidadPublico');
  }

  get fotoPelicula(){
    return this.form.get('fotoPelicula');
  }

  get tipo(){
    return this.form.get('tipo');
  }

  get actor(){
    return this.form.get('actor');
  }

  AbrirRuta(ruta: string){
    this.router.navigate([ruta]);
  }
}
