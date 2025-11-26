import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfImageToText } from './pdf-image-to-text';

describe('PdfImageToText', () => {
  let component: PdfImageToText;
  let fixture: ComponentFixture<PdfImageToText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfImageToText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfImageToText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
