import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaActorComponent } from './tabla-actor.component';

const routes: Routes = [
  { path: '', component: TablaActorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaPaisesRoutingModule { }