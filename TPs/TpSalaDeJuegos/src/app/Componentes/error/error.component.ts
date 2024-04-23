import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
    mensaje: string = ''
    ruta:string = '';

    constructor(private router: Router){}

    MostrarPopup(mensaje:string,ruta:string)
    {
      this.mensaje = mensaje;
      this.ruta = ruta;
    }

    CerrarPopup() {
      this.router.navigate([this.ruta]);
    }
}
