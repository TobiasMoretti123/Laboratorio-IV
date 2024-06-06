import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginVerificacionComponent } from './login-verificacion.component';

const routes: Routes = [{ path: '', component: LoginVerificacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginVerificacionRoutingModule { }
