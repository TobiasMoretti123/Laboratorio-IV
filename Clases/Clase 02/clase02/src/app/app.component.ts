import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './componente/productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('Method not implemented.');
  }
  title = 'clase02';
}
