import { Component, Input } from '@angular/core';
import { Helado } from '../../Clases/helado';
import { HeladoService } from '../../Servicios/helado.service';

@Component({
  selector: 'app-helado-baja',
  templateUrl: './helado-baja.component.html',
  styleUrl: './helado-baja.component.css'
})
export class HeladoBajaComponent {
  @Input() helado: Helado | null = null;
  idDelHelado:any;

  constructor(public heladoService:HeladoService){}

  BorrarHelado(){
    this.heladoService.BuscarHeladosPorSabor(this.helado?.sabor).subscribe((helados) => {
      helados.forEach((helado) => {
        this.idDelHelado = helado.id;
      });
    });
    this.heladoService.BajaHelado(this.idDelHelado);
  }
}
