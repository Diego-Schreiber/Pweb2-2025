import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from './api';  // nombre real del servicio

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  movies: any[] = [];
  api = inject(Api);

  constructor() {
    this.getMovies();
  }

  getMovies() {
    this.api.getAllMovies().subscribe(
      data => this.movies = data,
      error => console.error(error)
    );
  }
}

