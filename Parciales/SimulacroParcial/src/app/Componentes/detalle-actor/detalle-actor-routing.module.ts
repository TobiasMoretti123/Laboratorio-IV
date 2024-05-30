import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleActorComponent } from './detalle-actor.component';

const routes: Routes = [
  { path: '', component: DetalleActorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleActorRoutingModule { }