import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Servicios/chat.service';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule,MatButtonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  mensajes$: Observable<{ usuario: string, mensaje: string, fecha: Date }[]> | null = null;
  nuevoMensaje: string = '';

  constructor(public chatService: ChatService,public auth:Auth,public router:Router) {}

  ngOnInit(): void {
    this.chatService.initChat();
    this.mensajes$ = this.chatService.mensajes$;
  }


  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.chatService.enviarMensaje(this.auth.currentUser?.email,this.nuevoMensaje);
      this.nuevoMensaje = ''; 
    }
  }

  Volver(){
    this.RuteoHome();
  }
  
  RuteoHome(){
    this.router.navigate(['/home']);
  }
}
