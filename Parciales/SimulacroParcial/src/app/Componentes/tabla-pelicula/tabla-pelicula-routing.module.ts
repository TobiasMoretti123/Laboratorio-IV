import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPeliculaComponent } from './tabla-pelicula.component';

const routes: Routes = [
  { path: '', component: TablaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaPeliculaRoutingModule { }