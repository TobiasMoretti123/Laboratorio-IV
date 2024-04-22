import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { HomeComponent } from './Componentes/home/home.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent},
    { path: 'quien-soy', component: QuienSoyComponent},
    { path: '**', component: ErrorComponent },
];
