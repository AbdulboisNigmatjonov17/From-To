import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', saved);
  }
}
