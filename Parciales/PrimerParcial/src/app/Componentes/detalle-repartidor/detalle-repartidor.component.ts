import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from '../../Clases/repartidor';
import { PaisesService } from '../../Servicios/paises.service';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrl: './detalle-repartidor.component.css'
})
export class DetalleRepartidorComponent {
  @Input() repartidor:Repartidor | null = null;
  paises: any[] = [];
  selectedPais!: any | null;
  mostrarDetalles:boolean = false;

  constructor(private paisesService:PaisesService) {}

  MostrarDetalles(pais:string){
    this.paisesService.ObtenerPaisesPorNombre(pais).subscribe(paises => {
      this.selectedPais = paises;
      this.mostrarDetalles = true;
    });
  }
}
