import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css' // Мы создадим этот файл ниже
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    // 1. Проверяем, совпадают ли пароли
    if (this.password !== this.confirmPassword) {
      alert('Пароли не совпадают!');
      return; // Прерываем выполнение функции
    }

    // 2. Создаем объект пользователя
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    // 3. Вызываем метод регистрации из сервиса
    const success = this.authService.register(newUser);

    // 4. Если регистрация успешна, перенаправляем на страницу входа
    if (success) {
      this.router.navigate(['/login']);
    }
  }
}
