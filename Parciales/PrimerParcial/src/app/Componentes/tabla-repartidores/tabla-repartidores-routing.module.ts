import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaRepartidoresComponent } from './tabla-repartidores.component';

const routes: Routes = [{ path: '', component: TablaRepartidoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaRepartidoresRoutingModule { }
