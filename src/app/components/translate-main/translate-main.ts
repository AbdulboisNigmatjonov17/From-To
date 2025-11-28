import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  text = signal('');
  resultText = signal('');
  resultCase: WritableSignal<resultCaseType> = signal('cyrillic');
  fromLanguages: Languages[] | undefined;
  toLanguages: Languages[] | undefined;

  selectedFromLanguage: string = 'Uzbek';
  selectedToLanguage: string = 'English';

  constructor(private translateService: TranslateService) {
    this.getLangs();
    console.log(this.selectedFromLanguage, this.selectedToLanguage, this.resultCase());
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
    // if (this.text()) {
    this.translateService
      .translateText(
        this.text(),
        this.selectedFromLanguage,
        this.selectedToLanguage,
        this.resultCase()
      )
      .subscribe({
        next: (res: TranslateResponse) => {
          this.resultText.set(res.result);
          console.log(res.result);
        },
        error: (err) => {
          console.error("Error from server: ", err);
        }
      });
    // }
  }

  swapLangs() {
    const temp = this.selectedFromLanguage;
    this.selectedFromLanguage = this.selectedToLanguage;
    this.selectedToLanguage = temp;

    this.translate();
  }
}