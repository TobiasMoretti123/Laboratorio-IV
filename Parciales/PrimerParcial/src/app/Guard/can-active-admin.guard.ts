import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

export const canActivateAdmin: CanActivateChildFn = (childRoute, state) => {

  const auth = inject(Auth);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if(auth.currentUser?.email == 'tobiasmoretti14@gmail.com') {
    return true;
  }  
  router.navigate(['/home']);
  snackBar.open('Solo disponible para Admins', 'Cerrar',{
    duration: 2000,
  });
  
  return false;
};

