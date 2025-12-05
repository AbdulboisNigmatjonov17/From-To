import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private translate: TranslateService) { }

  getHelpOptions() {
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

    return keys.map((key, i) => ({
      label: this.translate.instant(key),
      routerLink: routes[i]
    }));
  }

getThemeOptions() {
  return [
    {
      label: this.translate.instant('navbar.themes.light'),
      icon: 'pi pi-sun',
      theme: 'light'
    },
    {
      label: this.translate.instant('navbar.themes.dark'),
      icon: 'pi pi-moon',
      theme: 'dark'
    },
    {
      label: this.translate.instant('navbar.themes.system'),
      icon: 'pi pi-desktop',
      theme: 'system'
    },
    {
      label: this.translate.instant('navbar.themes.old-theme'),
      icon: 'pi pi-palette',
      theme: 'old-theme'
    }
  ];
}


  getOptions() {
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
      '/',
      '/telegram-bot',
      '/dictionary',
      '/context'
    ];

    return keys.map((key, i) => ({
      label: this.translate.instant(key),
      icon: icons[i],
      routerLink: routerLinks[i] || undefined
    }));
  }

  getLangOptions(changeLangFn: (code: string) => void) {
    const keys = [
      { code: "en", key: "navbar.langOptions.English" },
      { code: "qq", key: "navbar.langOptions.Qaraqalpaq" },
      { code: "ru", key: "navbar.langOptions.Russian" },
      { code: "uz", key: "navbar.langOptions.Uzbek" },
      { code: "fr", key: "navbar.langOptions.French" },
      { code: "zh", key: "navbar.langOptions.Chinese" },
      { code: "es", key: "navbar.langOptions.Español" },
      { code: "it", key: "navbar.langOptions.Itálian" },
      { code: "kg", key: "navbar.langOptions.Kyrgyz" },
      { code: "kk", key: "navbar.langOptions.Kazakh" },
      { code: "tj", key: "navbar.langOptions.Tadjik" },
      { code: "tr", key: "navbar.langOptions.Turkish" },
      { code: "tm", key: "navbar.langOptions.Turkmen" },
      { code: "pt", key: "navbar.langOptions.Portuguese" },
      { code: "de", key: "navbar.langOptions.Deutsch" },
      { code: "in", key: "navbar.langOptions.Indian" }
    ];

    return keys.map(item => ({
      label: this.translate.instant(item.key),
      command: () => changeLangFn(item.code)
    }));
  }

  getProfileOptions() {
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

    return keys.map((key, i) => ({
      label: this.translate.instant(key),
      icon: icons[i],
      routerLink: routerLinks[i]
    }));
  }
}
