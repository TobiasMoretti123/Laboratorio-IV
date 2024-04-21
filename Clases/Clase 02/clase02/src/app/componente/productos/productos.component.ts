import { Component, OnInit } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  productos: Producto[] =[{
    id: 1,
    name: 'Coca Cola',
  },
  {
    id: 2,
    name: 'pepsi'
  }]
}
