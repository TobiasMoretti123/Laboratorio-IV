import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  public coleccionLogin:any[] = [];
  public usuario:string = "";
  public conteoLogin:number = 0;
  private subcripciones!:Subscription;

  constructor(private firestore: Firestore){}

  Login(){
    let coleccion = collection(this.firestore, 'logins');
    addDoc(coleccion, {fecha: new Date(), "usuario":this.usuario})
  }

  GetData(){
    let coleccion = collection(this.firestore, 'logins');
    const observable = collectionData(coleccion);
    this.subcripciones = observable.subscribe((respuesta:any) => {
      this.coleccionLogin = respuesta;
      this.conteoLogin = this.coleccionLogin.length;
      console.log(respuesta);
    })
  }
}
