import { Component, Input } from '@angular/core';
import { Actor } from '../../Clases/actor';

@Component({
  selector: 'app-detalle-actor',

  templateUrl: './detalle-actor.component.html',
  styleUrl: './detalle-actor.component.css'
})
export class DetalleActorComponent {
  @Input() actor: Actor | null = null;
}
