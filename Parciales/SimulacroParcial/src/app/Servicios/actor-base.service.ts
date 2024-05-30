import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../Clases/actor';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, orderBy, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorBaseService {

  actores: Observable<any> | null = null;
  nuevaActor: Actor = new Actor('',0,'');

  constructor(private firestore:Firestore) {}

  LeerActores() {
    const colRef = collection(this.firestore, 'actores');
    const q = query(colRef, orderBy('edad','desc'));
    this.actores = collectionData(q);
  }
  
  AltaActores(nombre:string, edad:number, nacionalidad:string) {
    const colRef = collection(this.firestore, 'actores');
    addDoc(colRef, {
      nombre:nombre,
      nacionalidad:nacionalidad,
      edad:edad,
    })
    .then(() => console.log('Actor Ingresado Correctamente'))
    .catch(error => console.error('Error al Ingresar Actor:', error));
  }
}
