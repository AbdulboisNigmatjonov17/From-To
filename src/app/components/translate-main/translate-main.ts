import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { TranslateService } from '../../services/translate.service';
import { btnType, Languages, resultCaseType, TranslateResponse } from '../../models/Models';
// import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-translate-main',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SelectModule, CardModule, TextareaModule, ButtonModule, FileUpload],
  templateUrl: './translate-main.html',
  styleUrl: './translate-main.css',
})
export class TranslateMain {
  languages: Languages[] | undefined;
  text = new FormControl<string>('');
  resultText = new FormControl<string>('');
  resultCase = new FormControl<resultCaseType>('latin');
  fromLanguages: Languages[] | undefined;
  toLanguages: Languages[] | undefined;

  selectedFromLanguage: string = 'uzn_Latn';
  selectedToLanguage: string = 'eng_Latn';

  btn: btnType = 'true';

  @ViewChild('fileUpload') fileUpload!: FileUpload;
  openFileChooser() {
    this.fileUpload.choose();
  }

  constructor(private translateService: TranslateService) {
    this.getLangs();
    console.log(this.selectedFromLanguage, this.selectedToLanguage, this.resultCase.value);
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

  swapLangs() {
    const temp = this.selectedFromLanguage;
    this.selectedFromLanguage = this.selectedToLanguage;
    this.selectedToLanguage = temp;
    const temp2 = this.text.value;
    this.text.setValue(this.resultText.value);
    this.resultText.setValue(temp2);

    this.translate();
  }
}