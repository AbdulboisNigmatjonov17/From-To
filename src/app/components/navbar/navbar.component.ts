import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
// import translationsEN from '../../../../public/i18n/en.json';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule, ButtonModule, MenuModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  helpOptions: any[] | undefined;
  themeOptions: any[] | undefined;
  options: any[] | undefined;
  // langOptions: any[] | undefined;
  profileOptions: any[] | undefined;

  private translate = inject(TranslateService);

  langOptions = [
    { label: "English", code: "en" },
    { label: "Русский", code: "ru" },
    { label: "O‘zbekcha", code: "uz" },
  ];

  changeLang(code: string) {
    this.translate.use(code);
  }

  constructor(private router: Router) {
    //   this.translate.setTranslation('en', translationsEN);
    //   this.translate.setFallbackLang('en');
  }
  ngOnInit() {
    this.helpOptions = [
      { label: 'Help for a Translator', routerLink: '/help-for-translator' },
      { label: 'How to use?', routerLink: '/how-to-use' },
      { label: 'API for Developers', routerLink: '/developer-api' },
      { label: 'Terms and condtions', routerLink: '/terms-and-conditions' },
      { label: 'About Us', routerLink: '/about-us' },
      { label: 'Advertisement', routerLink: '/advertisement' },
      { label: 'Sitemap', routerLink: '/sitemap' },
    ];
    this.themeOptions = [
      { label: 'Light', icon: 'pi pi-circle' },
      { label: 'Dark', icon: 'pi pi-circle-fill' },
      { label: 'System', icon: 'pi pi-desktop' },
      { label: 'Old Theme' },
    ];
    this.options = [
      { label: 'Service of translators', icon: 'pi pi-address-book' },
      { label: 'Telegram bot', icon: 'pi pi-send', routerLink: '/telegram-bot' },
      { label: 'Dictionary', icon: 'pi pi-book', routerLink: '/dictionary' },
      { label: 'Context', icon: 'pi pi-comment', routerLink: '/context' },
    ]
    // this.langOptions = [
    //   { label: 'English' }, { label: 'Qaraqalpaqsha' }, { label: 'Русский' }, { label: 'Uzbekcha' },
    //   { label: 'Francais' }, { label: '中國人' }, { label: 'Espanol' },
    //   { label: 'Italico' }, { label: 'Kirgiz' }, { label: 'Kazakh' },
    //   { label: 'Tadjik' }, { label: 'Turkish' }, { label: 'Turkmen' },
    //   { label: 'Portuguese' }, { label: 'Deutsch' }, { label: 'भारतीय' }
    // ];
    this.profileOptions = [
      { label: 'Account', icon: 'pi pi-user' },
      { label: 'Sign in', icon: 'pi pi-user-plus', routerLink: '/auth/sign-in' },
      { label: 'Sign up', icon: 'pi pi-sign-out', routerLink: '/auth/sign-up' },
    ]
  }
}