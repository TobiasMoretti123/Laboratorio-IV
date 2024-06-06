import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
    children: [
        {
            path: 'alta',
            loadChildren: () => import('../alta-repartidor/alta-repartidor.module')
              .then(m => m.AltaRepartidorModule)
        },
        {
            path: 'listado',
            loadChildren: () => import('../tabla-repartidores/tabla-repartidores.module')
              .then(m => m.TablaRepartidoresModule)
      },
      { path: '', redirectTo: 'repartidor', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
