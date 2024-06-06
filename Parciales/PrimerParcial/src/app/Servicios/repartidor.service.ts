import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repartidor } from '../Clases/repartidor';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, orderBy, query } from 'firebase/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  repartidores: Observable<any> | null = null;

  constructor(private firestore:Firestore,public snackBar:MatSnackBar) {}

  LeerRepartidores() {
    const colRef = collection(this.firestore, 'Repartidor');
    const q = query(colRef, orderBy('edad','desc'));
    this.repartidores = collectionData(q);
  }
  
  AltaRepartidores(repartidor:Repartidor) {
    const colRef = collection(this.firestore, 'Repartidor');
    addDoc(colRef, {
      dni:repartidor.dni,
      nombre:repartidor.nombre,
      edad:repartidor.edad,
      capacidadTransporte:repartidor.capacidadTransporte,
      paisOrigen:repartidor.paisOrigen,
      unidadPropia:repartidor.unidadPropia,
    })
    .then(() => this.AbrirSnackBar('Repartidor Ingresado Correctamente'))
    .catch(error => this.AbrirSnackBar(`Error al Ingresar Repartidor: ${error}`));
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }
}
