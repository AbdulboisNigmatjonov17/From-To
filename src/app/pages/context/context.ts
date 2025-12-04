import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { Languages } from '../../models/Models';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-context',
  imports: [SelectModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './context.html',
  styleUrl: './context.css',
})
export class Context {
  languages: Languages[] | undefined;
  text = new FormControl<string>('');
  fromLanguages: Languages[] | undefined;
  toLanguages: Languages[] | undefined;

  selectedFromLanguage: string = 'uzn_Latn';
  selectedToLanguage: string = 'eng_Latn';

  constructor(private translateService: TranslateService,) {
    this.getLangs();
  }

  getLangs() {
    this.translateService.getLanguages().subscribe({
      next: (languages: Languages[]) => {
        this.fromLanguages = languages;
        this.toLanguages = languages;
      },
      error: (err) => {
        console.error("Error from server:", err);
      }
    });
  }

  swapLangs() {
    const temp = this.selectedFromLanguage;
    this.selectedFromLanguage = this.selectedToLanguage;
    this.selectedToLanguage = temp;
  }
  clear() {
    this.text.setValue('');
  }
}