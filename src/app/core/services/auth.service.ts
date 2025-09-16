import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'angular_music_users';
  private loggedInUserKey = 'angular_music_currentUser';

  constructor(private router: Router) { }

  // --- Регистрация ---
  register(user: any): boolean {
    const users = this.getUsersFromStorage();

    // Проверяем, существует ли уже пользователь с таким email
    if (users.find(u => u.email === user.email)) {
      alert('Пользователь с таким email уже существует!');
      return false;
    }

    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    alert('Регистрация прошла успешно!');
    return true;
  }

  // --- Вход ---
  login(credentials: any): boolean {
    const users = this.getUsersFromStorage();
    const foundUser = users.find(u => u.email === credentials.email && u.password === credentials.password);

    if (foundUser) {
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(foundUser));
      this.router.navigate(['/music']); // Перенаправляем на главную страницу
      return true;
    }

    alert('Неверный email или пароль!');
    return false;
  }

  // --- Выход ---
  logout(): void {
    localStorage.removeItem(this.loggedInUserKey);
    this.router.navigate(['/login']);
  }

  // --- Проверка, залогинен ли пользователь ---
  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInUserKey) !== null;
  }

  // Вспомогательная функция для получения всех пользователей
  private getUsersFromStorage(): any[] {
    const users = localStorage.getItem(this.localStorageKey);
    return users ? JSON.parse(users) : [];
  }
}
