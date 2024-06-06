import { Component, Input, OnInit } from '@angular/core';
import { Helado } from '../../Clases/helado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoHeladoValidator } from '../../Validadores/tipoHeladoValidator.Validator';
import { HeladoService } from '../../Servicios/helado.service';

@Component({
  selector: 'app-helado-modificacion',
  templateUrl: './helado-modificacion.component.html',
  styleUrl: './helado-modificacion.component.css'
})
export class HeladoModificacionComponent implements OnInit {
  @Input() helado: Helado | null = null;
  form!:FormGroup;
  heladoModificado: Helado | null = null;
  mostrarTooltip:boolean = false;
  mostrarBotones:boolean = false;
  idDelHelado:any;

  constructor(public heladoService:HeladoService){}

  ModificarHelado(){
    this.heladoService.BuscarHeladosPorSabor(this.helado?.sabor).subscribe((helados) => {
      helados.forEach((helado) => {
        this.idDelHelado = helado.id;
      });
    });
    if(this.form.valid){
      const tipo = this.form.value.tipo;
      const precio = this.form.value.precio;
      const peso = this.form.value.peso;
      this.heladoModificado = new Helado(this.helado?.sabor,tipo,precio,peso)
      this.heladoService.ModificarHelado(this.idDelHelado,this.heladoModificado);
    } 
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      tipo: new FormControl(this.helado?.tipo,[Validators.required,TipoHeladoValidator()]),
      precio: new FormControl(this.helado?.precio,[Validators.required,Validators.min(0)]),
      peso:new FormControl(this.helado?.peso,[Validators.required,Validators.min(250),Validators.max(1000)]),
    },[TipoHeladoValidator()])
  }

  get precio(){
    return this.form.get('precio');
  }

  get tipo(){
    return this.form.get('tipo');
  }

  get peso(){
    return this.form.get('peso');
  }
}
