import { Component } from '@angular/core';
import { TranslateMain } from '../../components/translate-main/translate-main';

@Component({
  selector: 'app-home',
  imports: [TranslateMain],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

}
