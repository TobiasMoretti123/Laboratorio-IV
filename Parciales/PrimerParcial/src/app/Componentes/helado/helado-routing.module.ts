import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeladoComponent } from './helado.component';

const routes: Routes = [ {
  path: '',
    children: [
        {
            path: 'ABM',
            loadChildren: () => import('../helado-alta/helado-alta.module')
              .then(m => m.HeladoAltaModule)
        },
      { path: '', redirectTo: 'helado', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeladoRoutingModule { }
