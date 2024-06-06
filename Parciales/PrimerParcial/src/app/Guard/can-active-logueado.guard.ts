import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const canActivateLogeados: CanActivateChildFn = (childRoute, state) => {

  const auth = inject(Auth);
  const router = inject(Router)

  if(auth.currentUser) {
    return true;
  }
  router.navigate(['/home']);
  
  return false;
};