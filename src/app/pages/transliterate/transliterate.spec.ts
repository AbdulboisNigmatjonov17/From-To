import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transliterate } from './transliterate';

describe('Transliterate', () => {
  let component: Transliterate;
  let fixture: ComponentFixture<Transliterate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transliterate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transliterate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
