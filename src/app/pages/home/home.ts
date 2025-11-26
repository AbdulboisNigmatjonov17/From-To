import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar.component/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

}
