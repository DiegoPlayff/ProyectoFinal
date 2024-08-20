import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  // Importacione
  const router = inject(Router);
  const toastr = inject(ToastrService)

  let token = localStorage.getItem('token');
  if (!token) { 
    toastr.error('No autorizado', 'error');
    router.navigate(['/login']);
    return false;
  }
  return true;
};
