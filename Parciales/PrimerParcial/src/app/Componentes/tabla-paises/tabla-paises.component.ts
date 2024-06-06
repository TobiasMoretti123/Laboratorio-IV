import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { PaisesService } from '../../Servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent implements OnInit{
  paisesEuropeos:any[] = [];
  paisesAfricanos:any[] = [];
  @Output() countrySelected = new EventEmitter<any>();
  selectedCountry: any;

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
    this.paisesService.ObtenerPaises().subscribe((paises) => {
      this.paisesEuropeos = paises.filter((pais:any) => pais.region === 'Europe').slice(0,3);
      this.paisesAfricanos = paises.filter((pais:any) => pais.region === 'Africa').slice(0,3);
    });
  }


  SeleccionarPais(event: MouseEvent,pais:any) {
    this.selectedCountry = pais;
    this.countrySelected.emit(this.selectedCountry);
  }
}
