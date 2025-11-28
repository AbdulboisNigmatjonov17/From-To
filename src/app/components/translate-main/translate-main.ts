import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { TranslateService } from '../../services/translate.service';
import { Languages, TranslateResponse } from '../../models/Models';

type resultCaseType = 'latin' | 'cyrillic';

@Component({
  selector: 'app-translate-main',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SelectModule, CardModule, TextareaModule, ButtonModule, FileUpload],
  templateUrl: './translate-main.html',
  styleUrl: './translate-main.css',
})
export class TranslateMain {
  languages: Languages[] | undefined;
  text = new FormControl<string | null>('');
  resultText = new FormControl<string>('');
  resultCase: resultCaseType = 'latin';
  fromLanguages: Languages[] | undefined;
  toLanguages: Languages[] | undefined;

  selectedFromLanguage: string = 'Uzbek';
  selectedToLanguage: string = 'English';

  constructor(private translateService: TranslateService) {
    this.getLangs();
    this.translate();
    console.log(this.selectedFromLanguage, this.selectedToLanguage);
  }

  getLangs() {
    this.translateService.getLanguages().subscribe({
      next: (languages: Languages[]) => {
        this.fromLanguages = languages;
        this.toLanguages = languages;
        console.log(languages);
        this.translate();
      },
      error: (err) => {
        console.error("Error from server:", err);
      }
    });
  }

  translate() {
    if (this.text.value) {
      this.translateService
        .translateText(
          this.text.value,
          this.selectedFromLanguage,
          this.selectedToLanguage,
          this.resultCase
        )
        .subscribe({
          next: (res: TranslateResponse) => {
            this.resultText.setValue(res.result);
            console.log(res);
          },
          error: (err) => {
            console.error("Error from server: ", err);
          }
        });
    }
  }

  swapLangs() {
    const temp = this.selectedFromLanguage;
    this.selectedFromLanguage = this.selectedToLanguage;
    this.selectedToLanguage = temp;

    this.translate();
  }
}