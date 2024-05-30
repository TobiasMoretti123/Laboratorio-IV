import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPaisesComponent } from './tabla-paises.component';

const routes: Routes = [
  { path: '', component: TablaPaisesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaPaisesRoutingModule { }