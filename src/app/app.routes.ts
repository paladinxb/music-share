import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MusicComponent } from './music/music.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Если пользователь залогинен, / перенаправит на /music, иначе на /login
  {
    path: '',
    redirectTo: '/music',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'music',
    component: MusicComponent,
    canActivate: [authGuard] // Защищаем этот роут
  },
  // Если роут не найден, перенаправляем на главную
  {
    path: '**',
    redirectTo: '/music'
  }
];
