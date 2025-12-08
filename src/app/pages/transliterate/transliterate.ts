import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { btnType, Itransliterate } from '../../models/Models';
import { TranslateCyrill } from '../../components/translate-cyrill/translate-cyrill';
import { transliterateData } from '../../../data/transliterateData';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-transliterate',
  imports: [TranslateCyrill, ReactiveFormsModule, RouterLink],
  templateUrl: './transliterate.html',
  styleUrl: './transliterate.css',
  standalone: true
})
export class Transliterate {
  languages: Itransliterate[] = transliterateData;
  alone: btnType = 'true';

  getTargetName(toCode: string) {
    const found = this.languages.find(l => l.fromCode === toCode);
    return found ? found.from : 'Unknown';
  }
}
