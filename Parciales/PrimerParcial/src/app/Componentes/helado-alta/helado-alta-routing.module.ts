import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeladoAltaComponent } from './helado-alta.component';

const routes: Routes = [{ path: '', component: HeladoAltaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeladoAltaRoutingModule { }
