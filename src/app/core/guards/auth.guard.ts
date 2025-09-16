import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true; // Если пользователь залогинен, пускаем
  }
  // Если не залогинен, перенаправляем на страницу входа
  router.navigate(['/login']);
  return false;
};
