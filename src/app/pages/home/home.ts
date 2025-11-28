import { Component } from '@angular/core';
import { TranslateMain } from '../../components/translate-main/translate-main';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Languages, resultCaseType, TranslateResponse } from '../../models/Models';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-home',
  imports: [TranslateMain, ReactiveFormsModule,],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  languages: Languages[] | undefined;
  text = new FormControl<string>('');
  resultText = new FormControl<string>('');
  resultCase = new FormControl<resultCaseType>('latin');
  fromLanguages: Languages[] | undefined;
  toLanguages: Languages[] | undefined;

  selectedFromLanguage: string = 'uzn_Latn';
  selectedToLanguage: string = 'eng_Latn';
  constructor(private translateService: TranslateService) { }
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
      .translateText(
        this.text.value,
        this.selectedFromLanguage,
        this.selectedToLanguage,
        this.resultCase.value
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
