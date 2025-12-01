import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateCyrill } from './translate-cyrill';

describe('TranslateCyrill', () => {
  let component: TranslateCyrill;
  let fixture: ComponentFixture<TranslateCyrill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateCyrill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateCyrill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
