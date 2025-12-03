import { Component } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MenuModule, ButtonModule, TranslatePipe],
  standalone: true
})
export class NavbarComponent {
  helpOptions: { label: string; routerLink: string }[] = [];
  themeOptions: { label: string; icon: string }[] = [];
  options: { label: string; icon: string; routerLink?: string }[] = [];
  langOptions: { label: string; command: () => void }[] = [];
  profileOptions: { label: string; icon: string; routerLink: string }[] = [];

  constructor(private menuService: MenuService, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.buildMenus();
    });
    this.buildMenus();
  }

  buildMenus() {
    this.helpOptions = this.menuService.getHelpOptions();
    this.themeOptions = this.menuService.getThemeOptions();
    this.options = this.menuService.getOptions();
    this.profileOptions = this.menuService.getProfileOptions();
    this.langOptions = this.menuService.getLangOptions(this.changeLang.bind(this));
  }

  changeLang(code: string) {
    this.translate.use(code);
  }
}
