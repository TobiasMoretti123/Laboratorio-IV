import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Servicios/chat.service';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Timestamp } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule,MatButtonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  mostrarUsuario:boolean = false;
  mensajes: { usuario: string, mensaje: string, fecha: Timestamp }[] = [];
  nuevoMensaje: string = '';

  constructor(public chatService: ChatService,public auth:Auth,public router:Router, public snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.chatService.IniciarChat();
    this.chatService.mensajes?.subscribe(mensajes => {
      this.mensajes = mensajes;
    });
  }

  CerrarSession(){
    signOut(this.auth);
    this.AbrirSnackBar('Se a cerrado la sesion');
    this.RuteoHome();
  }

  AbrirSnackBar(mensaje:any){
    this.snackBar.open(mensaje, 'Cerrar',{
      duration: 2000,
    });
  }

  EnviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.chatService.EnviarMensaje(this.auth.currentUser?.email,this.nuevoMensaje);
      this.nuevoMensaje = ''; 
      console.log(this.nuevoMensaje);
    }
  }

  Volver(){
    this.RuteoHome();
  }
  
  RuteoHome(){
    this.router.navigate(['/home']);
  }

  ConvertirFecha(timestamp: any): Date {
    return timestamp instanceof Timestamp ? timestamp.toDate() : timestamp;
  }

  MostrarUsuario() {
    this.mostrarUsuario = true;
  }

  OcultarUsuario() {
    this.mostrarUsuario = false;
  }
}
