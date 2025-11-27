import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpForTranslator } from './help-for-translator';

describe('HelpForTranslator', () => {
  let component: HelpForTranslator;
  let fixture: ComponentFixture<HelpForTranslator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpForTranslator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpForTranslator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
