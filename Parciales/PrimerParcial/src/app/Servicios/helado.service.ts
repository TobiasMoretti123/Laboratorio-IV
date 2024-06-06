import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Helado } from '../Clases/helado';
import { Firestore, collectionData, deleteDoc, doc, setDoc, where } from '@angular/fire/firestore';
import { addDoc, collection, orderBy, query } from 'firebase/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HeladoService {

  helados: Observable<any> | null = null;

  constructor(private firestore:Firestore,public snackBar:MatSnackBar) {}

  LeerRepartidores() {
    const colRef = collection(this.firestore, 'Helado');
    const q = query(colRef, orderBy('precio','desc'));
    this.helados = collectionData(q);
  }
  
  AltaHelado(helado:Helado) {
    const colRef = collection(this.firestore, 'Helado');
    addDoc(colRef, {
      sabor:helado.sabor,
      tipo:helado.tipo,
      precio:helado.precio,
      peso:helado.peso
    })
    .then(() => this.AbrirSnackBar('Helado Ingresado Correctamente'))
    .catch(error => this.AbrirSnackBar(`Error al Ingresar Helado: ${error}`));
  }

  BajaHelado(id: string) {
    const docRef = doc(this.firestore, 'Helado', id);
    deleteDoc(docRef)
      .then(() => this.AbrirSnackBar('Helado Eliminado Correctamente'))
      .catch(error => this.AbrirSnackBar(`Error al Eliminar Helado: ${error}`));
  }

  BuscarHeladosPorSabor(sabor: string | undefined) {
    const colRef = collection(this.firestore, 'Helado');
    const q = query(colRef, where('sabor', '==', sabor));
    return collectionData(q, { idField: 'id' }).pipe(
      map((snapshot) => {
        return snapshot.map((doc) => {
          const data = doc as Helado;
          const id = doc.id;
          return { id, ...data };
        });
      })
    );
  }

  ModificarHelado(id: string, helado: Helado) {
    const docRef = doc(this.firestore, 'Helado', id);
    setDoc(docRef, {
      sabor: helado.sabor,
      tipo: helado.tipo,
      precio: helado.precio,
      peso: helado.peso
    })
      .then(() => this.AbrirSnackBar('Helado Modificado Correctamente'))
      .catch(error => this.AbrirSnackBar(`Error al Modificar Helado: ${error}`));
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }
}
