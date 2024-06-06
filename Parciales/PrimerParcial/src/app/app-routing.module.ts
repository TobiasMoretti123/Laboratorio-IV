import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateLogeados } from './Guard/can-active-logueado.guard';
import { canActivateAdmin } from './Guard/can-active-admin.guard';

export const routes: Routes = [
{ path: '', loadChildren: () => import('./Componentes/home/home.module')
.then(m => m.HomeModule) }, 
{ path: 'loginVerificacion', loadChildren: () => import('./Componentes/login-verificacion/login-verificacion.module')
.then(m => m.LoginVerificacionModule) },
{ path: 'home', loadChildren: () => import('./Componentes/home/home.module')
.then(m => m.HomeModule)}, 
{ path: 'repartidor', loadChildren: () => import('./Componentes/repartidor/repartidor.module')
.then(m => m.RepartidorModule) ,canActivate:[canActivateLogeados]},
{ path: 'helado', loadChildren: () => import('./Componentes/helado/helado.module')
.then(m => m.HeladoModule), canActivate:[canActivateAdmin]},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', loadChildren: () => import('./Componentes/error/error.module')
.then(m => m.ErrorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
