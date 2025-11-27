import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateMain } from './translate-main';

describe('TranslateMain', () => {
  let component: TranslateMain;
  let fixture: ComponentFixture<TranslateMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
