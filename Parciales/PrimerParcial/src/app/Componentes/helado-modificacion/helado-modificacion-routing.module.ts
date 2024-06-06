import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeladoModificacionComponent } from './helado-modificacion.component';

const routes: Routes = [{ path: '', component: HeladoModificacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeladoModificacionRoutingModule { }
