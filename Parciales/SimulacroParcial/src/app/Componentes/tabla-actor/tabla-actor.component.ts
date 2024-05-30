import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorBaseService } from '../../Servicios/actor-base.service';
import { Actor } from '../../Clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.css'
})
export class TablaActorComponent implements OnInit {
  mostrarActor:boolean=false;
  actores: Actor[] = [];
  selectedActor!: Actor | null;
  @Output() actorSeleccionado = new EventEmitter<any>();

  constructor(private actorService: ActorBaseService) {}

  ngOnInit(): void {
    this.actorService.LeerActores();
    this.actorService.actores?.subscribe(actores => {
      this.actores = actores;
    });
  }

  SeleccionarActor(event: MouseEvent,actor:Actor) {
    this.selectedActor = new Actor (actor.nombre,actor.edad,actor.nacionalidad) ;
    this.actorSeleccionado.emit(this.selectedActor);
  }
}
