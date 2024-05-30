import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListadoComponent } from './peliculas-listado.component';

const routes: Routes = [
  { path: '', component: PeliculasListadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasListadoRoutingModule { }