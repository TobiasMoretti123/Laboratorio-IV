import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Actor } from '../../Clases/actor';
import { ActorBaseService } from '../../Servicios/actor-base.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css'
})
export class ActorAltaComponent implements OnInit{
  form!:FormGroup
  mostrarboton:boolean = false;
  pais: any;
  selectedPais: any;
  actor: Actor = new Actor('',0,'');

  constructor(private actorService:ActorBaseService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombreActor: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl("", [Validators.required,Validators.min(0)]),
      nacionalidad: new FormControl("")
    })
  }

  AltaActor(){
    if(this.form.valid){
      this.mostrarboton = true;
      this.actor = new Actor(this.form.value.nombreActor,this.form.value.edad,this.form.value.nacionalidad);
      this.actorService.AltaActores(this.actor.nombre,this.actor.edad,this.actor.nacionalidad);
    }
  }

  OnSeleccionarPais(paisSeleccionado:any){
    this.selectedPais = paisSeleccionado;
    this.form.value.nacionalidad = paisSeleccionado.name.common;
  }

  get nombre(){
    return this.form.get('nombreActor');
  }

  get edad(){
    return this.form.get('edad');
  }

  get nacionalidad(){
    return this.form.get('nacionalidad');
  }
}
