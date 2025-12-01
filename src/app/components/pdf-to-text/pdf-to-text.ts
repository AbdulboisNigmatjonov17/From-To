import { Component, Input, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { btnType, Languages } from '../../models/Models';

@Component({
  selector: 'app-pdf-to-text',
  imports: [],
  templateUrl: './pdf-to-text.html',
  styleUrl: './pdf-to-text.css',
  standalone: true
})
export class PdfToText {
  @Input() languages: Languages[] = [];
  @Input() alone: btnType = 'false';

  langName: string = '';

  @ViewChild('fileUpload') fileUpload!: FileUpload;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.langName = params.get('lang') || '';
    });
  }
  openFileChooser() {
    this.fileUpload.choose();
  }
}
import { ActivatedRoute } from '@angular/router';


