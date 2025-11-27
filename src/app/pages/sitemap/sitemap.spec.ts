import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sitemap } from './sitemap';

describe('Sitemap', () => {
  let component: Sitemap;
  let fixture: ComponentFixture<Sitemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sitemap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sitemap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
