import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { VerificacionLoginComponent } from './Componentes/verificacion-login/verificacion-login.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'firestore', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: VerificacionLoginComponent},
    { path: 'signUp', component: SignUpComponent},
    { path: 'quien-soy', component: QuienSoyComponent},
    { path: '**', component: LoginComponent },
];
