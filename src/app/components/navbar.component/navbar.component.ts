import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule, ButtonModule, Menu],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  helpOptions: any[] | undefined;
  themeOptions: any[] | undefined;
  options: any[] | undefined;
  langOptions: any[] | undefined;
  profileOptions: any[] | undefined;

  constructor(private router: Router) { }

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
    this.langOptions = [
      { label: 'English' }, { label: 'Qaraqalpaqsha' }, { label: 'Русский' }, { label: 'O%20zbekcha' },
      { label: 'Francais' }, { label: '中國人' }, { label: 'Espanol' },
      { label: 'Italico' }, { label: 'Kirgiz' }, { label: 'Kazakh' },
      { label: 'Tadjik' }, { label: 'Turkish' }, { label: 'Turkmen' },
      { label: 'Portuguese' }, { label: 'Deutsch' }, { label: 'भारतीय' }
    ];
    this.profileOptions = [
      { label: 'Account', icon: 'pi pi-user' },
      { label: 'Sign in', icon: 'pi pi-user-plus', routerLink: '/auth/sign-in' },
      { label: 'Sign up', icon: 'pi pi-sign-out', routerLink: '/auth/sign-up' },
    ]
  }
}