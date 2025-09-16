// src/app/app.component.ts
import { Component, OnInit } from '@angular/core'; // 1. Импортируем OnInit
import { CommonModule } from '@angular/common';

// (Опционально, но рекомендуется) Создаем интерфейс для наших данных
interface Song {
  artist: string;
  title: string;
  qualityIndex: number; // Каждая песня будет иметь свой индекс качества
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // 2. Реализуем OnInit
  title = 'MusicShare';
  author = 'paladinxb';

  // 3. Указываем, что наш массив соответствует интерфейсу Song
  songs: Song[] = [
    { artist: 'paladinxb', title: 'Hello World', qualityIndex: 0 },
    { artist: 'The Virtuals', title: 'Angular Groove', qualityIndex: 0 },
    { artist: 'DJ Component', title: 'Callback Funk', qualityIndex: 0 },
    { artist: 'SynthWave Rider', title: 'Promise of the Grid', qualityIndex: 0 },
    { artist: 'MC State', title: 'Reactive Flow', qualityIndex: 0 },
    { artist: 'The Observers', title: 'Lazy Load Blues', qualityIndex: 0 }
  ];

  // Массив доступных качеств
  readonly song_quality = ['MP3', 'FLAC', 'WAV']; // Добавим еще одно для наглядности

  ngOnInit(): void {
    // Этот метод вызывается один раз при инициализации компонента.
    // Если бы в исходных данных не было qualityIndex, здесь было бы лучшее место его добавить.
  }

  // 4. Создаем метод, который будет вызываться по клику
  changeQuality(song: Song): void {
    // Получаем текущий индекс и увеличиваем его на 1
    // Используем оператор % (остаток от деления) для "зацикливания" массива
    // Например, если у нас 3 элемента (0, 1, 2) и текущий индекс 2,
    // (2 + 1) % 3 = 3 % 3 = 0. Мы вернемся к первому элементу.
    const newIndex = (song.qualityIndex + 1) % this.song_quality.length;
    song.qualityIndex = newIndex;
  }
}
