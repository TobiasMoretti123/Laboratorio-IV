import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePaisesComponent } from './detalle-paises.component';

const routes: Routes = [{ path: '', component: DetallePaisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePaisesRoutingModule { }
