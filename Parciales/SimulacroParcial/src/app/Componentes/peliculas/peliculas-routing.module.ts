import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
    children: [
        {
            path: 'alta',
            loadChildren: () => import('./../peliculas-alta/peliculas-alta.module')
              .then(m => m.PeliculaAltasModule)
        },
        {
          path: 'listado',
          loadChildren: () => import('./../peliculas-listado/peliculas-listado.module')
            .then(m => m.PeliculasListadoModule)
      },
      { path: '', redirectTo: 'pelicula', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }