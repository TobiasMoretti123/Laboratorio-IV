import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeladoBajaComponent } from './helado-baja.component';

const routes: Routes = [{ path: '', component: HeladoBajaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeladoBajaRoutingModule { }
