import { Component } from '@angular/core';
import { Auth,signOut } from '@angular/fire/auth';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mostrarTooltip = false;
  
  constructor(public auth:Auth){}

  CerrarSession(){
    signOut(this.auth).then(() => {
      console.log(this.auth.currentUser?.email)
    })
  }

  mostrarTexto() {
    this.mostrarTooltip = true;
  }

  ocultarTexto() {
    this.mostrarTooltip = false;
  }
}
