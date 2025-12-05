import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  setTheme(theme: string) {
    const body = document.body;

    body.classList.remove('dark', 'light', 'old-theme');

    if (theme !== 'light') {
      body.classList.add(theme);
    }

    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    this.setTheme(saved);
  }
}
