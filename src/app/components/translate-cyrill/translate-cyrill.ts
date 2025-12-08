import { Component, Input, ViewChild } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';
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

  selectedFromLanguage: string = '';
  selectedToLanguage: string = '';

  @ViewChild('fileUpload') fileUpload!: FileUpload;

  constructor(
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      const fromParam = params.get('from') || 'uz_latin';
      this.selectedFromLanguage = fromParam;
      this.updateToLanguage(fromParam);
    });
  }

  openFileChooser() {
    this.fileUpload.choose();
  }

  updateToLanguage(fromCode: string) {
    const found = this.languages.find(l => l.fromCode === fromCode);
    if (found) {
      this.selectedToLanguage = found.toCode;
    }
    this.translate();
  }

  translate() {
    if (!this.text.value) {
      this.resultText.setValue('');
      return;
    }

    this.translateService.transliterateText(
      this.text.value,
      this.selectedFromLanguage,
      this.selectedToLanguage
    ).subscribe({
      next: (res: TranslateResponse) => {
        this.resultText.setValue(res.result);
      }
    });
  }

  swapLangs() {
    const temp = this.selectedFromLanguage;
    this.selectedFromLanguage = this.selectedToLanguage;
    this.updateToLanguage(this.selectedFromLanguage);

    const tempText = this.text.value;
    this.text.setValue(this.resultText.value);
    this.resultText.setValue(tempText);

    this.translate();
  }
}
