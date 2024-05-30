import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { addDoc } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { Pelicula } from '../Clases/pelicula';
import { Actor } from '../Clases/actor';

@Injectable({
  providedIn: 'root'
})
export class PeliculaBaseService {
  peliculas: Observable<any> | null = null;
  nuevaPelicula: Pelicula = new Pelicula('',0,Timestamp.now(),'',0,'',new Actor('',0,''));

  constructor(private firestore: Firestore) {}

  LeerPeliculas() {
    const colRef = collection(this.firestore, 'pelicula');
    const q = query(colRef, orderBy('id','desc'));
    this.peliculas = collectionData(q);
  }
  
  AltaPelicula(nombre:string,cantidadPublico:number,fotoPelicula:string,fechaEstreno:Timestamp,tipo:string,id:number,actor:Actor) {
    const colRef = collection(this.firestore, 'pelicula');
    addDoc(colRef, {
      Nombre:nombre,
      actor:actor.nombre,
      cantidadPublico:cantidadPublico,
      fechaEstreno:fechaEstreno,
      fotoPelicula:fotoPelicula,
      id:id,
      tipo:tipo
    })
    .then(() => console.log('Pelicula Ingresada Correctamente'))
    .catch(error => console.error('Error al Ingresar Pelicula:', error));
  }
}