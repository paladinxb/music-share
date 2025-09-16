import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

// 1. Обновляем интерфейс
interface Song {
  artist: string;
  title: string;
  qualityIndex: number;
  volume: number;
  genre: string;
  rating: number;
  isInfoVisible: boolean; // Флаг для показа/скрытия доп. информации
}

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  title = 'MusicShare';
  author = 'Author - paladinxb';

  // 2. Обновляем массив, добавляя новые поля и isInfoVisible: false
  songs: Song[] = [
    { artist: 'paladinxb', title: 'Hello World', qualityIndex: 0, volume: 75, genre: 'Electronic', rating: 4.5, isInfoVisible: false },
    { artist: 'The Virtuals', title: 'Angular Groove', qualityIndex: 0, volume: 75, genre: 'Funk', rating: 4.8, isInfoVisible: false },
    { artist: 'DJ Component', title: 'Callback Funk', qualityIndex: 0, volume: 75, genre: 'Funk', rating: 4.6, isInfoVisible: false },
    { artist: 'SynthWave Rider', title: 'Promise of the Grid', qualityIndex: 0, volume: 75, genre: 'Synthwave', rating: 4.9, isInfoVisible: false },
    { artist: 'MC State', title: 'Reactive Flow', qualityIndex: 0, volume: 75, genre: 'Hip-Hop', rating: 4.7, isInfoVisible: false },
    { artist: 'The Observers', title: 'Lazy Load Blues', qualityIndex: 0, volume: 75, genre: 'Blues', rating: 4.4, isInfoVisible: false }
  ];

  readonly song_quality = ['MP3', 'FLAC'];

  changeQuality(song: Song): void {
    song.qualityIndex = (song.qualityIndex + 1) % this.song_quality.length;
  }

  // 3. Два новых метода для управления видимостью
  showInfo(song: Song): void {
    song.isInfoVisible = true;
  }

  hideInfo(song: Song): void {
    song.isInfoVisible = false;
  }

  constructor(private authService: AuthService) {}

  // Создаем метод для выхода
  logout(): void {
    this.authService.logout();
  }
}
