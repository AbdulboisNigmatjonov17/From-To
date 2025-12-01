import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Itransliterate, Languages, TranslateResponse } from '../../models/Models';
import { TranslateService } from '../../services/translate.service';
import { TranslateCyrill } from '../../components/translate-cyrill/translate-cyrill';

@Component({
  selector: 'app-transliterate',
  imports: [TranslateCyrill, ReactiveFormsModule],
  templateUrl: './transliterate.html',
  styleUrl: './transliterate.css',
})
export class Transliterate {
  languages: Itransliterate[] | undefined;

  constructor(private translateService: TranslateService) {
    // this.getLangs();
    console.log();
  }

}
