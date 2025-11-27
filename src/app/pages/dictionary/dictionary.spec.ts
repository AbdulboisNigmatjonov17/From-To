import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dictionary } from './dictionary';

describe('Dictionary', () => {
  let component: Dictionary;
  let fixture: ComponentFixture<Dictionary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dictionary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dictionary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
