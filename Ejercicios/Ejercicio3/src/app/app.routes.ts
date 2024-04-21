import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';



export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'error', component: ErrorComponent},
    { path: '**', component: ErrorComponent },
];

