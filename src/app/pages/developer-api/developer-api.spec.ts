import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperApi } from './developer-api';

describe('DeveloperApi', () => {
  let component: DeveloperApi;
  let fixture: ComponentFixture<DeveloperApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
