import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { TranslateService } from '../../services/translate/translate.service';
import { btnType, Languages } from '../../models/Models';
import { RouterModule } from '@angular/router';
import { PdfToText } from '../../components/pdf-to-text/pdf-to-text';

@Component({
  selector: 'app-pdf-image-to-text',
  imports: [ButtonModule, RouterModule, PdfToText],
  templateUrl: './pdf-image-to-text.html',
  styleUrl: './pdf-image-to-text.css',
})
export class PdfImageToText {
  languages: Languages[] = [];
  alone: btnType = 'true';

  @ViewChild('fileUpload') fileUpload!: FileUpload;
  openFileChooser() {
    this.fileUpload.choose();
  }

  constructor(private translateService: TranslateService) {
    this.getLangs();
  }

  getLangs() {
    this.translateService.getLanguages().subscribe({
      next: (languages: Languages[]) => {
        this.languages = languages;
        this.translate();
      },
      error: (err) => {
        console.error("Error from server:", err);
      }
    });
  }
  translate() { }
}
