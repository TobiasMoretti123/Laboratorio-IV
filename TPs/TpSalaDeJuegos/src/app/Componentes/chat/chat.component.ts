import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Servicios/chat.service';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  nuevoMensaje: string = '';

  constructor(public chatService: ChatService,public auth:Auth) {}

  ngOnInit(): void {
    this.chatService.initChat();
  }


  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.chatService.enviarMensaje(this.auth.currentUser?.email,this.nuevoMensaje);
      this.nuevoMensaje = ''; 
    }
  }
}
