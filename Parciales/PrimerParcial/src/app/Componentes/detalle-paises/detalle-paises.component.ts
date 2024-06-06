import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle-paises',
  templateUrl: './detalle-paises.component.html',
  styleUrl: './detalle-paises.component.css'
})
export class DetallePaisesComponent implements OnInit{
  @Input() pais:any | null = null;

  ngOnInit(): void {
    console.log(this.pais);
  }
}
