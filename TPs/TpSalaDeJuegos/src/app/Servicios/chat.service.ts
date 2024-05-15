import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  mensajes$: Observable<{ usuario: string, mensaje: string, fecha: Date }[]> | null = null;
  nuevoMensaje: string = '';

  constructor(private firestore: Firestore) {
    
  }

  initChat() {
    let col = collection(this.firestore, 'messages');
    const observable = collectionData(col).pipe(
      map((data: DocumentData[]) => {
        return data.map(doc => {
          return {
            usuario: doc['usuario'],
            mensaje: doc['mensaje'],
            fecha: doc['fecha'].toDate()
          };
        });
      })
    );
    this.mensajes$ = observable;
  }
  
  enviarMensaje(usuario: string | null | undefined, mensaje: string) {
    let col = collection(this.firestore, 'messages');
    addDoc(col, { fecha: new Date(), 'usuario': usuario, 'mensaje': mensaje });
  }
}