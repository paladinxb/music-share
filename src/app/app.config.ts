import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // provideRouter(routes) регистрирует наши маршруты
  providers: [provideRouter(routes)]
};
