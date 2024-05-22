import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../Clases/Usuario';
import { Subscription } from 'rxjs';
import { addDoc, Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  coleccionLogin:any[] =[];
  usuario: Usuario = new Usuario("","");
  contadorLog:number = 0;
  private sub!:Subscription;

  constructor(private firestore:Firestore){}

  Login(){
    let col = collection(this.firestore,'logins');
    addDoc(col,{ fecha:new Date(), "user":this.usuario})
  }

  GetData(){
    let col = collection(this.firestore,'logins');
    const observable = collectionData(col);

    this.sub = observable.subscribe((respuesta:any)=>{
      this.coleccionLogin = respuesta;
      this.contadorLog = this.coleccionLogin.length;
      console.log(respuesta);
    })
  }
}
