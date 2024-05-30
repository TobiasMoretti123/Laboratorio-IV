import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../Servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit{
  paises: any[] = [];
  @Output() countrySelected = new EventEmitter<any>();
  selectedCountry: any;

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
    this.paisesService.ObtenerPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  SeleccionarPais(event: any) {
    const selectedIndex = event.target.value;
    this.selectedCountry = this.paises[selectedIndex];
    this.countrySelected.emit(this.selectedCountry);
  }
}
