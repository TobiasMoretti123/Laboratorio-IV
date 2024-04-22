import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}
  Ingresar(){
    this.router.navigate(['login']);
  };
  QuienSoy(){
    this.router.navigate(['quien-soy']);
  }
}
