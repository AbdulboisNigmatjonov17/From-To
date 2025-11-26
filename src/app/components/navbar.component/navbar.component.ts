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
  langOptions: any[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.helpOptions = [
      { label: 'Help for a Translator' },
      { label: 'How to use?' },
      { label: 'API for Developers' },
      { label: 'Terms and condtions' },
      { label: 'About Us' },
      { label: 'Advertisement' },
      { label: 'Sitemap' }
    ];

    this.langOptions = [
      { label: 'English' },
      { label: 'Qaraqalpaqsha' },
      { label: 'Русский' },
      { label: 'O%20zbekcha' },
      { label: 'Francais' },
      { label: '中國人' },
      { label: 'Espanol' },
      { label: 'Italico' },
      { label: 'Kirgiz' },
      { label: 'Kazakh' },
      { label: 'Tadjik' },
      { label: 'Turkish' },
      { label: 'Turkmen' },
      { label: 'Portuguese' },
      { label: 'Deutsch' },
      { label: 'भारतीय' }
    ];
    //     {
    //   label: 'Router',
    //   icon: 'pi pi-palette',
    //   items: [
    //     [
    //       {
    //         label: 'RouterLink',
    //         items: [
    //           { label: 'Theming', routerLink: '/theming' },
    //           { label: 'UI Kit', routerLink: '/uikit' }
    //         ]
    //       }
    //     ]
    //   ]
    // },
    // {
    //   label: 'Programmatic',
    //   icon: 'pi pi-link',
    //   command: () => {
    //     this.router.navigate(['/installation']);
    //   }
    // },
    // {
    //   label: 'External',
    //   icon: 'pi pi-home',
    //   items: [
    //     [
    //       {
    //         label: 'External',
    //         items: [
    //           { label: 'Angular', url: 'https://angular.dev/' },
    //           {
    //             label: 'Vite.js',
    //             url: 'https://vitejs.dev/'
    //           }
    //         ]
    //       }
    //     ]
    //   ]
    // }
  }
}