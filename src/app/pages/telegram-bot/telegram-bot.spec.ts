import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramBot } from './telegram-bot';

describe('TelegramBot', () => {
  let component: TelegramBot;
  let fixture: ComponentFixture<TelegramBot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelegramBot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelegramBot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
