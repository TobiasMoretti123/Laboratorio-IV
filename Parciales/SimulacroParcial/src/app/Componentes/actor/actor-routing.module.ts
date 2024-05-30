import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
    children: [
        {
            path: 'alta',
            loadChildren: () => import('./../actor-alta/actor-alta.module')
              .then(m => m.ActorAltaModule)
        },
        {
          path: 'listado',
          loadChildren: () => import('./../actor-listado/actor-listado.module')
            .then(m => m.ActorListadoModule)
      },
      { path: '', redirectTo: 'actor', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }