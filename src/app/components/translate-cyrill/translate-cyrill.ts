import { Component, Input, ViewChild } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { btnType, Itransliterate, TranslateResponse } from '../../models/Models';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { transliterateData } from '../../../data/transliterateData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-translate-cyrill',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SelectModule, CardModule, TextareaModule, ButtonModule, FileUpload],
  templateUrl: './translate-cyrill.html',
  styleUrl: './translate-cyrill.css',
})
export class TranslateCyrill {
  @Input() alone: btnType = 'false';
  languages: Itransliterate[] = transliterateData;
  text = new FormControl<string>('');
  resultText = new FormControl<string>('');
  fromLanguages: Itransliterate[] | undefined;
  toLanguages: Itransliterate[] | undefined;

  selectedFromLanguage: string = '';
  selectedToLanguage: string = '';

  langName: string = '';

  @ViewChild('fileUpload') fileUpload!: FileUpload;
  openFileChooser() {
    this.fileUpload.choose();
  }
  constructor(private translateService: TranslateService, private route: ActivatedRoute) {
    this.fromLanguages = this.languages;
    this.toLanguages = this.languages;

    this.route.paramMap.subscribe(params => {
      this.selectedFromLanguage = params.get('from') || 'uz_latin';
      this.selectedToLanguage = params.get('to') || 'uz_cyrillic';
    });
    // console.log(this.selectedFromLanguage, this.selectedToLanguage);
  }

  translate() {
    this.translateService
      .transliterateText(
        this.text.value,
        this.selectedFromLanguage,
        this.selectedToLanguage
      )
      .subscribe({
        next: (res: TranslateResponse) => {
          this.resultText.setValue(res.result);
          // console.log(res.result);
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