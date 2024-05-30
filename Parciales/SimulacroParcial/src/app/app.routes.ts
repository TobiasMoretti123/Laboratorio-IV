import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./Componentes/bienvenido/bienvenido.module')
            .then((m) => m.BienvenidoModule)
    },
    {
        path: 'bienvenido',
        loadChildren: () => import('./Componentes/bienvenido/bienvenido.module')
            .then((m) => m.BienvenidoModule)
    },
    {
        path: 'busqueda',
        loadChildren: () => import('./Componentes/busqueda/busqueda.module')
            .then((m) => m.BusquedaModule)
    },
    {
        path: 'peliculas',
        loadChildren: () => import('./Componentes/peliculas/peliculas.module')
            .then((m) => m.PeliculaModule)
    },
    {
        path: 'actor',
        loadChildren: () => import('./Componentes/actor/actor.module')
            .then((m) => m.ActorModule)
    },
    { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () => import('./Componentes/error/error.component')
            .then((m) => m.ErrorComponent)
    }
];