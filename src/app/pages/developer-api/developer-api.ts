import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-developer-api',
  imports: [RouterModule],
  templateUrl: './developer-api.html',
  styleUrl: './developer-api.css',
})
export class DeveloperApi {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
