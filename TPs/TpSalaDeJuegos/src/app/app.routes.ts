import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Componentes/home/home.component')
            .then((m) => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./Componentes/home/home.component')
            .then((m) => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./Componentes/login-verificacion/login-verificacion.component')
            .then((m) => m.LoginVerificacionComponent)
    },
    {
        path: 'quien-soy',
        loadComponent: () => import('./Componentes/quien-soy/quien-soy.component')
            .then((m) => m.QuienSoyComponent)
    },
    {
        path: 'registrarse',
        loadComponent: () => import('./Componentes/registrarse-verificacion/registrarse-verificacion.component')
            .then((m) => m.RegistrarseVerificacionComponent)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () => import('./Componentes/error/error.component')
            .then((m) => m.ErrorComponent)
    }
];
