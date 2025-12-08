import { Component } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MenuModule, ButtonModule, TranslatePipe, RouterModule, FormsModule, DrawerModule],
  standalone: true
})
export class NavbarComponent {
  helpOptions: { label: string; routerLink: string }[] = [];
  themeOptions: { label: string; icon: string }[] = [];
  options: { label: string; icon: string; routerLink?: string }[] = [];
  langOptions: { label: string; command: () => void }[] = [];
  profileOptions: { label: string; icon: string; routerLink: string }[] = [];
  selectedTheme: string = 'system';
  visible: boolean = false;

  constructor(private menuService: MenuService, private translate: TranslateService, private themeService: ThemeService) {
    this.translate.onLangChange.subscribe(() => {
      this.buildMenus();
    });
    this.buildMenus();
  }

  buildMenus() {
    this.helpOptions = this.menuService.getHelpOptions();
    this.options = this.menuService.getOptions();
    this.profileOptions = this.menuService.getProfileOptions();
    this.langOptions = this.menuService.getLangOptions(this.changeLang.bind(this));

    this.themeOptions = this.menuService.getThemeOptions().map(opt => ({
      label: opt.label,
      icon: opt.icon,
      command: () => this.changeTheme(opt.theme)
    }));
  }

  changeLang(code: string) {
    this.translate.use(code);
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}