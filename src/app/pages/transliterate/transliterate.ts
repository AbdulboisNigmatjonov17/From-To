import { Component } from '@angular/core';
import { TranslateMain } from '../../components/translate-main/translate-main';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Languages, TranslateResponse } from '../../models/Models';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-transliterate',
  imports: [TranslateMain, ReactiveFormsModule],
  templateUrl: './transliterate.html',
  styleUrl: './transliterate.css',
})
export class Transliterate {
  languages: Languages[] | undefined;
  text = new FormControl<string>('');
  resultText = new FormControl<string>('');
  fromLanguages: Languages[] | undefined;
  toLanguages: Languages[] | undefined;

  selectedFromLanguage: string = 'uzn_Latn';
  selectedToLanguage: string = 'eng_Latn';
  constructor(private translateService: TranslateService) {
    this.getLangs();
    console.log(this.selectedFromLanguage, this.selectedToLanguage,);
  }
  getLangs() {
    this.translateService.getLanguages().subscribe({
      next: (languages: Languages[]) => {
        this.fromLanguages = languages;
        this.toLanguages = languages;
        this.translate();
      },
      error: (err) => {
        console.error("Error from server:", err);
      }
    });
  }
  translate() {
    this.translateService
      .transliterateText(
        this.text.value,
        this.selectedFromLanguage,
        this.selectedToLanguage,
      )
      .subscribe({
        next: (res: TranslateResponse) => {
          this.resultText.setValue(res.result);
          console.log(res.result);
        },
        error: (err) => {
          console.error("Error from server: ", err);
        }
      });
  }
}
