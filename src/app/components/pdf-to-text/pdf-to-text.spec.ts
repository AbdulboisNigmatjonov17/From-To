import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToText } from './pdf-to-text';

describe('PdfToText', () => {
  let component: PdfToText;
  let fixture: ComponentFixture<PdfToText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfToText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfToText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
