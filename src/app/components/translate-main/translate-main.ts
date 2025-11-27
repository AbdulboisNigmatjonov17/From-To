import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUpload } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-translate-main',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SelectModule, CardModule, TextareaModule, ButtonModule, FileUpload],
  templateUrl: './translate-main.html',
  styleUrl: './translate-main.css',
})
export class TranslateMain {
  text = new FormControl<string>('');
  result = new FormControl<string>('');
  resultCase = 'latin';
  fromLanguages: any[] | undefined;
  toLanguages: any[] | undefined;

  selectedFromLanguage: string | undefined;
  selectedToLanguage: string | undefined;

  constructor(private translateService: TranslateService) { }
  ngOnInit() {
    this.fromLanguages = [
      { label: 'English', code: 'EN' },
      { label: 'Qaraqalpaqsha', code: 'QAR' },
      { label: 'Русский', code: 'RU' },
      { label: 'O%20zbekcha', code: 'UZ' },
      { label: 'Francais', code: 'FR' },
      { label: '中國人', code: 'CN' },
      { label: 'Espanol', code: 'es' },
      { label: 'Italico', code: 'IT' },
      { label: 'Kirgiz', code: 'KY' },
      { label: 'Kazakh', code: 'KZ' },
      { label: 'Tadjik', code: 'TJ' },
      { label: 'Turkish', code: 'TR' },
      { label: 'Turkmen', code: 'TK' },
      { label: 'Portuguese', code: 'PT' },
      { label: 'Deutsch', code: 'DE' },
      { label: 'भारतीय', code: 'HI' },
    ]
    this.toLanguages = [
      { label: 'English', code: 'EN' },
      { label: 'Qaraqalpaqsha', code: 'QAR' },
      { label: 'Русский', code: 'RU' },
      { label: 'O%20zbekcha', code: 'UZ' },
      { label: 'Francais', code: 'FR' },
      { label: '中國人', code: 'CN' },
      { label: 'Espanol', code: 'es' },
      { label: 'Italico', code: 'IT' },
      { label: 'Kirgiz', code: 'KY' },
      { label: 'Kazakh', code: 'KZ' },
      { label: 'Tadjik', code: 'TJ' },
      { label: 'Turkish', code: 'TR' },
      { label: 'Turkmen', code: 'TK' },
      { label: 'Portuguese', code: 'PT' },
      { label: 'Deutsch', code: 'DE' },
      { label: 'भारतीय', code: 'HI' },
    ]
  }
  translate() {
    if (this.text.value && this.selectedFromLanguage && this.selectedToLanguage) {
      this.translateService
        .translateText(
          this.text.value,
          this.selectedFromLanguage,
          this.selectedToLanguage,
          this.resultCase || 'latin'
        )
        .subscribe({
          next: (res: any) => {
            this.result.setValue(res.trans);
            console.log(res);
          },
          error: (err) => {
            console.error("Error from server" + err);
          }
        });
    }
  }
}
