import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, FormsModule, ButtonModule, MenuModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  helpOptions: any[] = [];
  themeOptions: any[] = [];
  options: any[] = [];
  langOptions: any[] = [];
  profileOptions: any[] = [];

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.onLangChange.subscribe(() => {
      this.buildAllMenus();
    });

    this.buildAllMenus();
  }

  buildAllMenus() {
    this.buildHelpOptions();
    this.buildThemeOptions();
    this.buildOptions();
    this.buildLangOptions();
    this.buildProfileOptions();
  }

  buildHelpOptions() {
    const keys = [
      'navbar.helps.HelpForTranslator',
      'navbar.helps.HowToUse',
      'navbar.helps.ApiForDeveloper',
      'navbar.helps.TermsAndConditions',
      'navbar.helps.AboutUs',
      'navbar.helps.Advertisement',
      'navbar.helps.Sitemap'
    ];

    const routes = [
      '/help-for-translator',
      '/how-to-use',
      '/developer-api',
      '/terms-and-conditions',
      '/about-us',
      '/advertisement',
      '/sitemap'
    ];

    this.helpOptions = keys.map((key, i) => ({
      label: this.translate.instant(key),
      routerLink: routes[i]
    }));
  }

  buildThemeOptions() {
    const keys = [
      'navbar.themes.Light',
      'navbar.themes.Dark',
      'navbar.themes.System',
      'navbar.themes.OldTheme'
    ];

    const icons = [
      'pi pi-circle',
      'pi pi-circle-fill',
      'pi pi-desktop',
      ''
    ];

    this.themeOptions = keys.map((key, i) => ({
      label: this.translate.instant(key),
      icon: icons[i]
    }));
  }

  buildOptions() {
    const keys = [
      'navbar.options.ServiceOfTranslators',
      'navbar.options.TelegramBot',
      'navbar.options.Dictionary',
      'navbar.options.Context'
    ];

    const icons = [
      'pi pi-address-book',
      'pi pi-send',
      'pi pi-book',
      'pi pi-comment'
    ];

    const routerLinks = [
      '',
      '/telegram-bot',
      '/dictionary',
      '/context'
    ];

    this.options = keys.map((key, i) => ({
      label: this.translate.instant(key),
      icon: icons[i],
      routerLink: routerLinks[i] || undefined
    }));
  }

  buildLangOptions() {
    const keys = [
      { code: "en", key: "navbar.langOptions.English" },
      { code: "qq", key: "navbar.langOptions.Qaraqalpaq" },
      { code: "ru", key: "navbar.langOptions.Russian" },
      { code: "uz", key: "navbar.langOptions.Uzbek" },
      { code: "fr", key: "navbar.langOptions.French" },
      { code: "zh", key: "navbar.langOptions.Chinese" },
      { code: "es", key: "navbar.langOptions.Espanol" },
      { code: "it", key: "navbar.langOptions.Italico" },
      { code: "kg", key: "navbar.langOptions.Kirgiz" }, 
      { code: "kk", key: "navbar.langOptions.Kazakh" },
      { code: "tj", key: "navbar.langOptions.Tadjik" },
      { code: "tr", key: "navbar.langOptions.Turkish" },
      { code: "tm", key: "navbar.langOptions.Turkmen" },
      { code: "pt", key: "navbar.langOptions.Portuguese" },
      { code: "de", key: "navbar.langOptions.Deutsch" },
      { code: "in", key: "navbar.langOptions.Indian" }
    ];

    this.langOptions = keys.map(item => ({
      label: this.translate.instant(item.key),
      command: () => this.changeLang(item.code)
    }));
  }

  buildProfileOptions() {
    const keys = [
      'navbar.profileOptions.Login',
      'navbar.profileOptions.Register'
    ];

    const icons = [
      'pi pi-user-plus',
      'pi pi-sign-in'
    ];

    const routerLinks = [
      '/auth/sign-in',
      '/auth/sign-up'
    ];

    this.profileOptions = keys.map((key, i) => ({
      label: this.translate.instant(key),
      icon: icons[i],
      routerLink: routerLinks[i]
    }));
  }

  changeLang(code: string) {
    this.translate.use(code);
  }
}
