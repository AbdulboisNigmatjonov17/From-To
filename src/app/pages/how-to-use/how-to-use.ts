import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-how-to-use',
  imports: [YouTubePlayerModule],
  standalone: true,
  templateUrl: './how-to-use.html',
  styleUrl: './how-to-use.css',
})
export class HowToUse {
  videoId = 'KuO39GPzuwg';
}
