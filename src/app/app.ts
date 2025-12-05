import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TranslatePipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('From-To');
  private translate = inject(TranslateService);

  constructor(private themeService: ThemeService) {
    this.translate.use('en');
  }
  ngOnInit() {
    this.themeService.loadTheme();
  }

}
