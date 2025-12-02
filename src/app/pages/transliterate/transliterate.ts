import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Itransliterate } from '../../models/Models';
import { TranslateService } from '../../services/translate.service';
import { TranslateCyrill } from '../../components/translate-cyrill/translate-cyrill';
import { transliterateData } from '../../../data/transliterateData';

@Component({
  selector: 'app-transliterate',
  imports: [TranslateCyrill, ReactiveFormsModule],
  templateUrl: './transliterate.html',
  styleUrl: './transliterate.css',
})
export class Transliterate {
  languages: Itransliterate[] | undefined = transliterateData;

  constructor(private translateService: TranslateService) {
    // console.log(this.languages);
  }

}
