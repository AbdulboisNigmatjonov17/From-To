import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-pdf-image-to-text',
  imports: [FileUpload, ButtonModule],
  templateUrl: './pdf-image-to-text.html',
  styleUrl: './pdf-image-to-text.css',
})
export class PdfImageToText {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  openFileChooser() {
    this.fileUpload.choose();
  }
}
